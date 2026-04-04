import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type DailyUsageRow = {
  id: string;
  guest_id: string | null;
  user_id: string | null;
  usage_date: string;
  usage_count: number;
};

type IdentityScope = {
  limit: number;
  identityType: "guest" | "verified_user" | "unverified_user";
  guestId: string | null;
  userId: string | null;
  authHeader: string | null;
};

const DEFAULT_GUEST_LIMIT = 5;
const VERIFIED_USER_LIMIT = 10;

function getSupabaseEnv() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error("Missing Supabase environment variables.");
  }

  return { supabaseUrl, supabasePublishableKey };
}

function createSupabaseClient(authHeader: string | null) {
  const { supabaseUrl, supabasePublishableKey } = getSupabaseEnv();

  return createClient(supabaseUrl, supabasePublishableKey, {
    global: authHeader
      ? {
          headers: {
            Authorization: authHeader,
          },
        }
      : undefined,
  });
}

async function resolveIdentity(request: Request): Promise<IdentityScope> {
  const authHeader = request.headers.get("authorization");
  const providedGuestId = request.headers.get("x-guest-id")?.trim() ?? null;
  const supabase = createSupabaseClient(authHeader);

  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  const isVerifiedUser = Boolean(user?.email_confirmed_at);

  if (user && isVerifiedUser) {
    return {
      identityType: "verified_user",
      limit: VERIFIED_USER_LIMIT,
      userId: user.id,
      guestId: null,
      authHeader,
    };
  }

  if (!providedGuestId) {
    throw new Error("Missing guest identity.");
  }

  return {
    identityType: user ? "unverified_user" : "guest",
    limit: DEFAULT_GUEST_LIMIT,
    userId: null,
    guestId: providedGuestId,
    authHeader,
  };
}

async function ensureDailyUsageRow(identity: IdentityScope): Promise<DailyUsageRow> {
  const supabase = createSupabaseClient(identity.authHeader);
  const usageDate = new Date().toISOString().slice(0, 10);

  let query = supabase
    .from("daily_usage")
    .select("id, guest_id, user_id, usage_date, usage_count")
    .eq("usage_date", usageDate)
    .limit(1);

  if (identity.userId) {
    query = query.eq("user_id", identity.userId);
  } else {
    query = query.eq("guest_id", identity.guestId ?? "");
  }

  const { data: rows, error: fetchError } = await query;

  if (fetchError) {
    throw new Error(fetchError.message);
  }

  const existingRow = rows?.[0];
  if (existingRow) {
    return existingRow as DailyUsageRow;
  }

  const { data: insertedRow, error: insertError } = await supabase
    .from("daily_usage")
    .insert({
      guest_id: identity.guestId,
      user_id: identity.userId,
      usage_date: usageDate,
      usage_count: 0,
    })
    .select("id, guest_id, user_id, usage_date, usage_count")
    .single();

  if (insertError || !insertedRow) {
    throw new Error(insertError?.message ?? "Failed to initialize usage row.");
  }

  return insertedRow as DailyUsageRow;
}

function buildUsagePayload(identity: IdentityScope, usageCount: number) {
  const remaining = Math.max(identity.limit - usageCount, 0);
  const isLimitReached = usageCount >= identity.limit;

  return {
    ok: true,
    usageCount,
    dailyLimit: identity.limit,
    remaining,
    isLimitReached,
    identityType: identity.identityType,
  };
}

export async function GET(request: Request) {
  try {
    const identity = await resolveIdentity(request);
    const usageRow = await ensureDailyUsageRow(identity);

    return NextResponse.json(buildUsagePayload(identity, usageRow.usage_count), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Failed to load usage limit.",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const identity = await resolveIdentity(request);
    const usageRow = await ensureDailyUsageRow(identity);

    if (usageRow.usage_count >= identity.limit) {
      return NextResponse.json(buildUsagePayload(identity, usageRow.usage_count), {
        status: 429,
        headers: { "Cache-Control": "no-store" },
      });
    }

    const supabase = createSupabaseClient(identity.authHeader);
    const { data: updatedRow, error: updateError } = await supabase
      .from("daily_usage")
      .update({ usage_count: usageRow.usage_count + 1 })
      .eq("id", usageRow.id)
      .select("usage_count")
      .single();

    if (updateError || !updatedRow) {
      throw new Error(updateError?.message ?? "Failed to update usage count.");
    }

    return NextResponse.json(buildUsagePayload(identity, updatedRow.usage_count), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Failed to update usage limit.",
      },
      { status: 500 },
    );
  }
}
