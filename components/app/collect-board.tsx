"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    collectionCounts,
    COLLECTIONS_EVENT,
    markCollectionPaid,
    nudgeCollection,
    readCollections,
    type CollectionRow,
    type CollectStatus,
} from "@/lib/demo/collections";
import { hydrateHouse } from "@/lib/demo/inbox";

const STATUS_LABEL: Record<CollectStatus, string> = {
    paid: "Paid",
    chasing: "Chasing",
    overdue: "Overdue",
    scheduled: "Scheduled",
};

export function CollectBoard() {
    const [rows, setRows] = useState<CollectionRow[]>([]);
    const [activeNumber, setActiveNumber] = useState<string | null>(null);
    const [busy, setBusy] = useState<string | null>(null);

    useEffect(() => {
        hydrateHouse();
        const sync = () => {
            const next = readCollections();
            setRows(next);
            setActiveNumber((current) => current ?? next[0]?.invoiceNumber ?? null);
        };
        sync();
        window.addEventListener(COLLECTIONS_EVENT, sync);
        return () => window.removeEventListener(COLLECTIONS_EVENT, sync);
    }, []);

    const active =
        rows.find((row) => row.invoiceNumber === activeNumber) ?? rows[0];
    const counts = collectionCounts(rows);

    const run = async (kind: "nudge" | "paid", invoiceNumber: string) => {
        setBusy(`${kind}:${invoiceNumber}`);
        await new Promise((resolve) => window.setTimeout(resolve, 1800));
        if (kind === "nudge") nudgeCollection(invoiceNumber);
        else markCollectionPaid(invoiceNumber);
        setBusy(null);
    };

    return (
        <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-4">
                {(
                    [
                        ["Paid", counts.paid],
                        ["Chasing", counts.chasing],
                        ["Overdue", counts.overdue],
                        ["Scheduled", counts.scheduled],
                    ] as const
                ).map(([label, value]) => (
                    <Card key={label}>
                        <CardHeader className="py-4">
                            <CardDescription>{label}</CardDescription>
                            <CardTitle className="text-2xl">{value}</CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
                <Card>
                    <CardHeader>
                        <CardTitle>Rails</CardTitle>
                        <CardDescription>
                            Paystack, M-Pesa, bank, WhatsApp. Nudge. Mark paid.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {rows.map((row) => (
                            <button
                                key={row.invoiceNumber}
                                type="button"
                                onClick={() => setActiveNumber(row.invoiceNumber)}
                                className={`w-full rounded-lg border px-3 py-3 text-left text-sm ${
                                    row.invoiceNumber === active?.invoiceNumber
                                        ? "border-slate-900 bg-slate-50"
                                        : "hover:bg-slate-50"
                                }`}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <span className="font-medium">
                                        {row.client}
                                    </span>
                                    <span className="text-xs font-medium">
                                        {STATUS_LABEL[row.status]}
                                    </span>
                                </div>
                                <p className="text-muted-foreground mt-1 text-xs">
                                    {row.invoiceNumber} · {row.city} · {row.currency}{" "}
                                    {row.amount} · {row.railLabel}
                                </p>
                            </button>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{active?.invoiceNumber ?? "Collect"}</CardTitle>
                        <CardDescription>
                            {active
                                ? `${active.client} · due ${active.due}`
                                : "Pick a note."}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {active ? (
                            <>
                                <p className="text-sm">
                                    {active.currency} {active.amount}
                                </p>
                                <p className="text-muted-foreground text-xs">
                                    Last: {active.lastNudge}
                                </p>
                                <div className="space-y-2 rounded-lg bg-[#e7f8e9] p-3">
                                    {active.transcript.map((line, index) => (
                                        <p
                                            key={`${active.invoiceNumber}-${index}`}
                                            className="text-sm leading-relaxed text-slate-800"
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>
                                {busy ? (
                                    <p className="text-muted-foreground text-sm">
                                        {busy.startsWith("nudge")
                                            ? "Sending on WhatsApp…"
                                            : "Closing the rail…"}
                                    </p>
                                ) : null}
                                <div className="flex flex-wrap gap-2">
                                    <Button
                                        size="sm"
                                        disabled={!!busy || active.status === "paid"}
                                        onClick={() =>
                                            run("nudge", active.invoiceNumber)
                                        }
                                    >
                                        Nudge
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        disabled={!!busy || active.status === "paid"}
                                        onClick={() =>
                                            run("paid", active.invoiceNumber)
                                        }
                                    >
                                        Mark paid
                                    </Button>
                                </div>
                            </>
                        ) : null}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
