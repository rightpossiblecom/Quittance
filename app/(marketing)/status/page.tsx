import type { Metadata } from "next";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND, COMPANY } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Status — ${BRAND}`,
    description: `Live status of ${BRAND} rooms and rails.`,
};

const SYSTEMS = [
    { name: "Inbox", detail: "Drafts from chat, voice, and photo", state: "Operational" },
    { name: "Invoice builder", detail: "Wizard, live preview, PDF", state: "Operational" },
    { name: "Collect", detail: "Nudge and mark paid", state: "Operational" },
    { name: "Paystack rail", detail: "Lagos and Accra charges", state: "Operational" },
    { name: "M-Pesa rail", detail: "Nairobi collections", state: "Operational" },
    { name: "Bank transfer", detail: "Named accounts on the note", state: "Operational" },
] as const;

export default function StatusPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    Status
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    The house is open.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
                    All rooms reporting. Last incident: 3 August 2026, PDF
                    generate delayed twenty minutes in Lagos — resolved the
                    same afternoon. Write {COMPANY.hello} if your desk
                    disagrees with this board.
                </p>
                <div className="mt-10 grid gap-3 md:grid-cols-2">
                    {SYSTEMS.map((row) => (
                        <Card key={row.name} className="border-white/10">
                            <CardHeader className="flex flex-row items-start justify-between gap-4">
                                <div>
                                    <CardTitle>{row.name}</CardTitle>
                                    <CardDescription>{row.detail}</CardDescription>
                                </div>
                                <p className="shrink-0 text-sm text-emerald-400">
                                    {row.state}
                                </p>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </main>
        </MarketingPageFrame>
    );
}
