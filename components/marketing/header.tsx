"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BRAND, MARKETING_NAV } from "@/lib/marketing/content";
import { clearSession, ensureSessionCookie, readSession, type DemoSession } from "@/lib/demo/auth";

export function MarketingHeader() {
    const [session, setSession] = useState<DemoSession | null>(null);

    useEffect(() => {
        const sync = () => {
            ensureSessionCookie();
            setSession(readSession());
        };
        sync();
        window.addEventListener("quittance-session", sync);
        window.addEventListener("storage", sync);
        return () => {
            window.removeEventListener("quittance-session", sync);
            window.removeEventListener("storage", sync);
        };
    }, []);

    return (
        <header className="z-[99] lg:container">
            <nav>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/10 bg-[#101828] px-5 py-3 shadow-[0_0_0_1px_rgba(212,160,23,0.12)]">
                    <Link href="/" className="text-lg font-semibold tracking-tight">
                        {BRAND}
                        <span className="quittance-gold ml-2 text-[10px] font-medium tracking-[0.18em] uppercase">
                            AI
                        </span>
                    </Link>
                    <div
                        aria-label="Marketing"
                        className="text-muted-foreground hidden flex-wrap items-center gap-1 text-sm lg:flex"
                    >
                        {MARKETING_NAV.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-foreground inline-flex min-h-10 items-center px-2.5"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        {session ? (
                            <>
                                <Button asChild variant="ghost" size="sm">
                                    <Link href="/inbox">Open house</Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        clearSession();
                                        setSession(null);
                                    }}
                                >
                                    Log out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button asChild variant="ghost" size="sm">
                                    <Link href="/login">Log in</Link>
                                </Button>
                                <Button asChild size="sm">
                                    <Link href="/signup">Sign up</Link>
                                </Button>
                            </>
                        )}
                    </div>
                    <div
                        aria-label="Marketing mobile"
                        className="text-muted-foreground flex w-full gap-1 overflow-x-auto text-sm lg:hidden"
                    >
                        {MARKETING_NAV.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-foreground inline-flex min-h-10 shrink-0 items-center px-2"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}
