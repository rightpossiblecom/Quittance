import { SESSION_COOKIE } from "@/lib/demo/session-cookie";

export const SESSION_KEY = "quittance:session";
export { SESSION_COOKIE };

export type DemoSession = {
    email: string;
    name: string;
};

function writeCookie() {
    document.cookie = `${SESSION_COOKIE}=1; Path=/; Max-Age=2592000; SameSite=Lax`;
}

function clearCookie() {
    document.cookie = `${SESSION_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
}

export function ensureSessionCookie() {
    if (readSession()) writeCookie();
}

export function readSession(): DemoSession | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = window.localStorage.getItem(SESSION_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as DemoSession;
        if (!parsed?.email) return null;
        return parsed;
    } catch {
        return null;
    }
}

export function writeSession(email: string): DemoSession {
    const name = email.split("@")[0] || "House";
    const session: DemoSession = { email, name };
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    writeCookie();
    window.dispatchEvent(new Event("quittance-session"));
    return session;
}

export function clearSession() {
    window.localStorage.removeItem(SESSION_KEY);
    clearCookie();
    window.dispatchEvent(new Event("quittance-session"));
}
