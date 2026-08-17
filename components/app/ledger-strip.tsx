"use client";

import { useEffect, useState } from "react";
import {
    collectionCounts,
    COLLECTIONS_EVENT,
    readCollections,
} from "@/lib/demo/collections";
import { hydrateHouse } from "@/lib/demo/inbox";

export function LedgerStrip() {
    const [counts, setCounts] = useState({
        paid: 0,
        chasing: 0,
        overdue: 0,
        scheduled: 0,
    });

    useEffect(() => {
        hydrateHouse();
        const sync = () => setCounts(collectionCounts(readCollections()));
        sync();
        window.addEventListener(COLLECTIONS_EVENT, sync);
        return () => window.removeEventListener(COLLECTIONS_EVENT, sync);
    }, []);

    const cells = [
        ["Paid", counts.paid],
        ["Chasing", counts.chasing],
        ["Overdue", counts.overdue],
        ["Scheduled", counts.scheduled],
    ] as const;

    return (
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {cells.map(([label, value]) => (
                <div
                    key={label}
                    className="rounded-lg border bg-white px-3 py-2 text-sm shadow-sm"
                >
                    <p className="text-muted-foreground text-xs">{label}</p>
                    <p className="text-lg font-semibold">{value}</p>
                </div>
            ))}
        </div>
    );
}
