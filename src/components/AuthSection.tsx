"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "@/lib/supabaseClient";

type AuthMode = "sign-in" | "sign-up";
type MessageType = "success" | "error" | null;
type AuthSectionVariant = "default" | "compact";

type AuthSectionProps = {
  id?: string;
  className?: string;
  variant?: AuthSectionVariant;
  title?: string;
  subtitle?: string;
  policyMessage?: string;
};

function getFriendlyErrorMessage(message: string): string {
  const normalized = message.toLowerCase();

  if (normalized.includes("invalid login credentials")) {
    return "Invalid email or password. Please try again.";
  }

  if (normalized.includes("email not confirmed")) {
    return "Your email is not confirmed yet. Please check your inbox and confirm before signing in.";
  }

  return "Authentication failed. Please try again.";
}

export default function AuthSection({
  id,
  className,
  variant = "default",
  title = "Account",
  subtitle,
  policyMessage,
}: AuthSectionProps) {
  const supabase = useMemo(() => getSupabaseBrowserClient(), []);
  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<MessageType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadSession() {
      const { data, error } = await supabase.auth.getSession();

      if (!isMounted) {
        return;
      }

      if (error) {
        setMessage(getFriendlyErrorMessage(error.message));
        setMessageType("error");
        return;
      }

      setSession(data.session ?? null);
    }

    void loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, updatedSession) => {
      setSession(updatedSession);
      if (updatedSession?.user?.email) {
        setMessage(`Signed in as ${updatedSession.user.email}.`);
        setMessageType("success");
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  async function handleAuthSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setMessageType(null);

    try {
      if (mode === "sign-up") {
        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
          throw error;
        }

        setPassword("");

        if (!data.session) {
          setMessage("Sign-up successful. Please check your email to confirm your account.");
        } else {
          setMessage("Sign-up successful. You are now signed in.");
        }

        setMessageType("success");
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        throw error;
      }

      setPassword("");
      setMessage(`Sign-in successful. Welcome, ${data.user.email ?? email}.`);
      setMessageType("success");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown authentication error";
      setMessage(getFriendlyErrorMessage(errorMessage));
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleSignOut() {
    setIsSubmitting(true);
    setMessage("");
    setMessageType(null);

    const { error } = await supabase.auth.signOut();

    if (error) {
      setMessage(getFriendlyErrorMessage(error.message));
      setMessageType("error");
      setIsSubmitting(false);
      return;
    }

    setMessage("Signed out successfully.");
    setMessageType("success");
    setIsSubmitting(false);
  }

  const signedInEmail = session?.user?.email;
  const isCompact = variant === "compact";

  return (
    <section
      id={id}
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${isCompact ? "p-5" : "p-6"} ${
        className ?? ""
      }`}
      aria-live="polite"
    >
      <div
        className={`mb-4 flex gap-3 ${
          isCompact ? "flex-col items-center text-center" : "items-center justify-between"
        }`}
      >
        <div className={isCompact ? "text-center" : ""}>
          <h3 className={`${isCompact ? "text-lg" : "text-xl"} font-semibold text-slate-900`}>{title}</h3>
          {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
          {policyMessage ? <p className="mt-1 text-xs text-slate-500">{policyMessage}</p> : null}
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {signedInEmail ? "Signed in" : "Signed out"}
        </span>
      </div>

      {signedInEmail ? (
        <div className={`space-y-4 ${isCompact ? "text-center" : ""}`}>
          <p className="text-sm text-slate-700">
            Signed in as <span className="font-semibold text-slate-900">{signedInEmail}</span>
          </p>
          <button
            type="button"
            onClick={() => void handleSignOut()}
            disabled={isSubmitting}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing out..." : "Sign out"}
          </button>
        </div>
      ) : (
        <div className={`space-y-4 ${isCompact ? "flex flex-col items-center" : ""}`}>
          <div className="inline-flex rounded-md border border-slate-300 bg-slate-50 p-1">
            <button
              type="button"
              className={`rounded px-3 py-1.5 text-sm font-medium transition ${
                mode === "sign-in" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
              }`}
              onClick={() => setMode("sign-in")}
            >
              Sign in
            </button>
            <button
              type="button"
              className={`rounded px-3 py-1.5 text-sm font-medium transition ${
                mode === "sign-up" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
              }`}
              onClick={() => setMode("sign-up")}
            >
              Sign up
            </button>
          </div>

          <form
            className={`grid gap-3 ${isCompact ? "w-full max-w-sm" : "sm:max-w-md"}`}
            onSubmit={(event) => void handleAuthSubmit(event)}
          >
            <label className="grid gap-1 text-sm text-slate-700">
              Email
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-slate-300 focus:ring"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-1 text-sm text-slate-700">
              Password
              <input
                type="password"
                autoComplete={mode === "sign-up" ? "new-password" : "current-password"}
                required
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-slate-300 focus:ring"
                placeholder="Minimum 6 characters"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Please wait..." : mode === "sign-up" ? "Create account" : "Sign in"}
            </button>
          </form>
        </div>
      )}

      {message ? (
        <p
          className={`mt-4 rounded-md border px-3 py-2 text-sm ${
            messageType === "error"
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-emerald-200 bg-emerald-50 text-emerald-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </section>
  );
}
