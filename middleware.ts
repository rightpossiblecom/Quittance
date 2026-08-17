import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { SESSION_COOKIE } from "@/lib/demo/session-cookie";

const intl = createMiddleware(routing);

const MARKETING_PREFIXES = [
    "/product",
    "/team",
    "/login",
    "/signup",
    "/about",
    "/pricing",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/security",
    "/acceptable-use",
    "/refunds",
    "/careers",
    "/press",
    "/changelog",
    "/status",
    "/help",
];

const APP_PREFIXES = ["/invoice", "/invoices", "/inbox", "/collect"];

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname === "/") {
        return NextResponse.next();
    }

    const isApp = APP_PREFIXES.some(
        (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    );
    if (isApp) {
        const signedIn = request.cookies.get(SESSION_COOKIE)?.value === "1";
        if (!signedIn) {
            const login = new URL("/login", request.url);
            login.searchParams.set("next", pathname);
            return NextResponse.redirect(login);
        }
        return NextResponse.next();
    }

    if (
        MARKETING_PREFIXES.some(
            (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
        )
    ) {
        return NextResponse.next();
    }

    return intl(request);
}

export const config = {
    matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
