const GUEST_ID_COOKIE = "guest_id";
const GUEST_ID_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

function readCookie(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const cookieValue = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));

  if (!cookieValue) {
    return null;
  }

  const rawValue = cookieValue.slice(name.length + 1);
  return decodeURIComponent(rawValue);
}

function writeCookie(name: string, value: string): void {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${GUEST_ID_MAX_AGE_SECONDS}; SameSite=Lax`;
}

export function getOrCreateGuestId(): string {
  const existingGuestId = readCookie(GUEST_ID_COOKIE);

  if (existingGuestId) {
    return existingGuestId;
  }

  const nextGuestId =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  writeCookie(GUEST_ID_COOKIE, nextGuestId);
  return nextGuestId;
}
