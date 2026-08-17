import type { Metadata } from "next";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Changelog — ${BRAND}`,
    description: `What shipped in the ${BRAND} house.`,
};

const SHIPPED = [
    {
        date: "12 August 2026",
        title: "Collect board",
        body: "Paystack, M-Pesa, bank, and WhatsApp on one rail. Nudge and mark paid from the same desk.",
    },
    {
        date: "28 July 2026",
        title: "Inbox drafts",
        body: "A chat, a voice note, or a photo of a handwritten bill becomes a lined invoice you can confirm.",
    },
    {
        date: "9 July 2026",
        title: "House ledger",
        body: "Paid, chasing, overdue on Invoices. Load a note from last season without rebuilding it.",
    },
    {
        date: "18 June 2026",
        title: "Corridor currencies",
        body: "Naira, cedis, shillings, rand, francs, and pounds on the same Firm seat.",
    },
    {
        date: "2 May 2026",
        title: "House mark",
        body: "Your letterhead on template one and template two. The client sees the shop, not a blank PDF.",
    },
] as const;

export default function ChangelogPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    Changelog
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    What the house shipped.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
                    New rooms and quieter fixes. The builder you already know
                    stays the builder.
                </p>
                <div className="mt-10 space-y-4">
                    {SHIPPED.map((row) => (
                        <Card key={row.title} className="border-white/10">
                            <CardHeader>
                                <p className="quittance-gold text-[10px] tracking-[0.18em] uppercase">
                                    {row.date}
                                </p>
                                <CardTitle>{row.title}</CardTitle>
                                <CardDescription>{row.body}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </main>
        </MarketingPageFrame>
    );
}
