import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND, COMPANY } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Security — ${BRAND}`,
    description: `How ${BRAND} keeps the house ledger closed to everyone but the firm.`,
};

const CONTROLS = [
    {
        title: "Transport",
        body: "HTTPS on every public page and every room. Sessions do not travel in the clear.",
    },
    {
        title: "Access",
        body: "A named account opens Inbox, Collect, and the ledger. Staff open a house only for a named ticket.",
    },
    {
        title: "Passwords",
        body: "Hashed at rest. We will never ask for your password in a chase message.",
    },
    {
        title: "Rails",
        body: "Paystack, M-Pesa, and the bank hold the money. We store rail references, not card PAN.",
    },
    {
        title: "Paper",
        body: "Invoices and Inbox files stay in the house you opened. Exports are yours to keep offline.",
    },
    {
        title: "Desks",
        body: "Lagos, Accra, Nairobi, Johannesburg. Production changes go through Naledi’s rail desk.",
    },
] as const;

export default function SecurityPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    Security
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    The next child should inherit the ledger, not a leak.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
                    Quittance holds invoices, chats, and chase history for
                    African firms. The house is built so a stranger cannot
                    walk in from the marketing page, and so a lost laptop is
                    not the whole story.
                </p>
                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {CONTROLS.map((item) => (
                        <Card key={item.title} className="border-white/10">
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription>{item.body}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <p className="text-muted-foreground mt-10 max-w-2xl text-sm leading-relaxed">
                    Found something that should not be open? Write{" "}
                    <a
                        href={`mailto:${COMPANY.security}`}
                        className="text-foreground underline"
                    >
                        {COMPANY.security}
                    </a>
                    . We answer a serious report within two Lagos working days.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild variant="outline">
                        <Link href="/privacy">Privacy</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/status">Status</Link>
                    </Button>
                </div>
            </main>
        </MarketingPageFrame>
    );
}
