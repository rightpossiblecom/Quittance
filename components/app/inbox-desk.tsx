"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    extractThread,
    hydrateHouse,
    readInbox,
    type InboxKind,
    type InboxThread,
    INBOX_EVENT,
} from "@/lib/demo/inbox";

const KIND_LABEL: Record<InboxKind, string> = {
    whatsapp: "WhatsApp",
    voice: "Voice",
    photo: "Photo",
};

export function InboxDesk() {
    const router = useRouter();
    const [threads, setThreads] = useState<InboxThread[]>([]);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [working, setWorking] = useState(false);

    useEffect(() => {
        hydrateHouse();
        const sync = () => {
            const next = readInbox();
            setThreads(next);
            setActiveId((current) => current ?? next[0]?.id ?? null);
        };
        sync();
        window.addEventListener(INBOX_EVENT, sync);
        return () => window.removeEventListener(INBOX_EVENT, sync);
    }, []);

    const active = threads.find((row) => row.id === activeId) ?? threads[0];

    const extract = async () => {
        if (!active || working) return;
        setWorking(true);
        await new Promise((resolve) => window.setTimeout(resolve, 2200));
        extractThread(active.id);
        setWorking(false);
        router.push("/invoice");
    };

    return (
        <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
            <Card>
                <CardHeader>
                    <CardTitle>Threads</CardTitle>
                    <CardDescription>
                        WhatsApp, voice, a photo of the bill.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {threads.map((thread) => (
                        <button
                            key={thread.id}
                            type="button"
                            onClick={() => setActiveId(thread.id)}
                            className={`w-full rounded-lg border px-3 py-3 text-left text-sm ${
                                thread.id === active?.id
                                    ? "border-slate-900 bg-slate-50"
                                    : "hover:bg-slate-50"
                            }`}
                        >
                            <div className="flex items-center justify-between gap-2">
                                <span className="font-medium">{thread.from}</span>
                                <span className="text-muted-foreground text-xs">
                                    {thread.time}
                                </span>
                            </div>
                            <p className="text-muted-foreground mt-1 line-clamp-2 text-xs">
                                {KIND_LABEL[thread.kind]} · {thread.preview}
                            </p>
                            {thread.extracted ? (
                                <p className="mt-2 text-xs font-medium text-emerald-700">
                                    Drafted · {thread.invoiceNumber}
                                </p>
                            ) : null}
                        </button>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>{active?.from ?? "Inbox"}</CardTitle>
                    <CardDescription>
                        {active
                            ? `${KIND_LABEL[active.kind]} from ${active.city}. Quittance reads it and drafts the note.`
                            : "Pick a thread."}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {active ? (
                        <div className="space-y-4">
                            <div className="rounded-2xl bg-[#e7f8e9] px-4 py-3 text-sm leading-relaxed text-slate-800">
                                {active.preview}
                            </div>
                            {working ? (
                                <p className="text-muted-foreground text-sm">
                                    Reading the {KIND_LABEL[active.kind].toLowerCase()}
                                    … lining From & To, items, the bank.
                                </p>
                            ) : null}
                            <Button onClick={extract} disabled={working}>
                                {working
                                    ? "Drafting invoice…"
                                    : active.extracted
                                      ? "Open invoice"
                                      : "Turn into invoice"}
                            </Button>
                        </div>
                    ) : null}
                </CardContent>
            </Card>
        </div>
    );
}
