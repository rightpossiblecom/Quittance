import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const intl = createMiddleware(routing);

const SKIP_PREFIXES = [
    "/product",
    "/team",
    "/login",
    "/signup",
    "/about",
    "/pricing",
    "/contact",
    "/privacy",
    "/terms",
    "/invoice",
    "/invoices",
    "/inbox",
    "/collect",
];

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    if (pathname === "/") {
        return NextResponse.next();
    }
    if (SKIP_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
        return NextResponse.next();
    }
    return intl(request);
}

export const config = {
    matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
