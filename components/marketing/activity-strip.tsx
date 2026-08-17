"use client";

import { useEffect, useState } from "react";
import { LIVE_STRIP } from "@/lib/marketing/content";

export function ActivityStrip() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setIndex((current) => (current + 1) % LIVE_STRIP.length);
        }, 3200);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#d4a017]/30 bg-[#d4a017]/10 px-3 py-1.5 text-xs">
            <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="quittance-gold font-medium tracking-wide uppercase">
                Live
            </span>
            <span className="text-muted-foreground truncate">{LIVE_STRIP[index]}</span>
        </div>
    );
}
