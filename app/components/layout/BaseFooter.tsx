"use client";

import Link from "next/link";
import { MARKETING_FOOTER_LEGAL, MARKETING_NAV } from "@/lib/marketing/content";

const BaseFooter = () => {
    return (
        <footer className="container py-10">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {MARKETING_NAV.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="hover:text-foreground text-muted-foreground underline-offset-4 hover:underline"
                    >
                        {item.label}
                    </Link>
                ))}
                {MARKETING_FOOTER_LEGAL.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="hover:text-foreground text-muted-foreground underline-offset-4 hover:underline"
                    >
                        {item.label}
                    </Link>
                ))}
                <Link
                    href="/login"
                    className="hover:text-foreground text-muted-foreground underline-offset-4 hover:underline"
                >
                    Log in
                </Link>
                <Link
                    href="/signup"
                    className="hover:text-foreground text-muted-foreground underline-offset-4 hover:underline"
                >
                    Sign up
                </Link>
            </div>
        </footer>
    );
};

export default BaseFooter;
