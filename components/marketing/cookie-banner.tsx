"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "quittance:cookies";

export function CookieBanner() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        try {
            setOpen(window.localStorage.getItem(COOKIE_KEY) !== "1");
        } catch {
            setOpen(false);
        }
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-[80] p-4">
            <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-lg border border-white/10 bg-[#101828] px-5 py-4 shadow-[0_0_0_1px_rgba(212,160,23,0.12)] sm:flex-row sm:items-center sm:justify-between">
                <p className="text-muted-foreground text-sm leading-relaxed">
                    We use cookies to keep you signed in and to see which rooms
                    the house needs. Read the{" "}
                    <Link href="/cookies" className="text-foreground underline">
                        cookie policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-foreground underline">
                        privacy
                    </Link>
                    .
                </p>
                <Button
                    size="sm"
                    className="shrink-0"
                    onClick={() => {
                        window.localStorage.setItem(COOKIE_KEY, "1");
                        setOpen(false);
                    }}
                >
                    Accept
                </Button>
            </div>
        </div>
    );
}
