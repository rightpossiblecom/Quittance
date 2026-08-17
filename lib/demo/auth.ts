export const SESSION_KEY = "quittance:session";

export type DemoSession = {
    email: string;
    name: string;
};

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
    window.dispatchEvent(new Event("quittance-session"));
    return session;
}

export function clearSession() {
    window.localStorage.removeItem(SESSION_KEY);
    window.dispatchEvent(new Event("quittance-session"));
}
