"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_RAIL, BRAND } from "@/lib/marketing/content";

export function HouseRail() {
    const pathname = usePathname();

    return (
        <div className="lg:container">
            <div className="mb-1 flex flex-wrap items-center gap-1 rounded-lg border bg-white px-3 py-2 text-sm shadow-sm">
                <Link href="/" className="mr-2 font-semibold tracking-tight">
                    {BRAND}
                </Link>
                {APP_RAIL.map((item) => {
                    const active =
                        pathname === item.href ||
                        pathname?.startsWith(`${item.href}/`);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={
                                active
                                    ? "rounded-md bg-slate-900 px-3 py-1.5 text-white"
                                    : "text-muted-foreground hover:text-foreground rounded-md px-3 py-1.5"
                            }
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
