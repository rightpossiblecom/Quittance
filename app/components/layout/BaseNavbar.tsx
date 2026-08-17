"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DevDebug, LanguageSelector, ThemeSwitcher } from "@/app/components";
import { BRAND } from "@/lib/marketing/content";
import { clearSession, readSession, type DemoSession } from "@/lib/demo/auth";

const APP_LINKS = [
    { href: "/invoice", label: "Invoice" },
    { href: "/invoices", label: "Invoices" },
    { href: "/product", label: "Product" },
    { href: "/team", label: "Team" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
] as const;

const BaseNavbar = () => {
    const devEnv = useMemo(() => {
        return process.env.NODE_ENV === "development";
    }, []);
    const [session, setSession] = useState<DemoSession | null>(null);

    useEffect(() => {
        const sync = () => setSession(readSession());
        sync();
        window.addEventListener("quittance-session", sync);
        window.addEventListener("storage", sync);
        return () => {
            window.removeEventListener("quittance-session", sync);
            window.removeEventListener("storage", sync);
        };
    }, []);

    return (
        <header className="lg:container z-[99]">
            <nav>
                <Card className="flex flex-wrap justify-between items-center px-5 gap-4 py-3">
                    <Link href="/" className="text-lg font-semibold tracking-tight">
                        {BRAND}
                    </Link>
                    <div className="text-muted-foreground hidden flex-wrap items-center gap-1 text-sm xl:flex">
                        {APP_LINKS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-foreground inline-flex min-h-9 items-center px-2"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    {devEnv && <DevDebug />}
                    <div className="flex flex-wrap items-center gap-2">
                        <LanguageSelector />
                        <ThemeSwitcher />
                        {session ? (
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
                    <div className="text-muted-foreground flex w-full gap-1 overflow-x-auto text-sm xl:hidden">
                        {APP_LINKS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-foreground inline-flex min-h-9 shrink-0 items-center px-2"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </Card>
            </nav>
        </header>
    );
};

export default BaseNavbar;
