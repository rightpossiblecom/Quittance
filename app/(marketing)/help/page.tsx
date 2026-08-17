import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND, COMPANY } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Help — ${BRAND}`,
    description: `How to open the ${BRAND} house and keep the ledger.`,
};

const TOPICS = [
    {
        title: "Open an account",
        body: "Sign up with a work email. You land in Inbox with the day’s threads already on the desk.",
    },
    {
        title: "Turn a chat into a note",
        body: "Inbox lists WhatsApp, voice, and photo threads. Open one, confirm the extract, and the builder fills. Generate the PDF when the lines are right.",
    },
    {
        title: "Chase a payment",
        body: "Collect shows the rail the client already uses. Nudge on WhatsApp, Paystack, M-Pesa, or the bank. Mark paid when the money lands.",
    },
    {
        title: "Find an old invoice",
        body: "Invoices is the ledger — paid, chasing, overdue. Load a note. Export JSON, CSV, XLSX, or XML for the accountant.",
    },
    {
        title: "Change plan",
        body: "House is free. Firm is ₦48,000 a year. Corridor is a conversation. Billing and returns live on Refunds.",
    },
    {
        title: "Close the house",
        body: "Write privacy@quittance.africa. We erase what the law lets us erase within thirty days.",
    },
] as const;

export default function HelpPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    Help
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    The desk answers here first.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
                    Short answers for a shop that is already late on a chase.
                    If this page is not enough, write {COMPANY.hello}.
                </p>
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {TOPICS.map((topic) => (
                        <Card key={topic.title} className="border-white/10">
                            <CardHeader>
                                <CardTitle>{topic.title}</CardTitle>
                                <CardDescription>{topic.body}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                    <Button asChild>
                        <Link href="/contact">Contact</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/refunds">Refunds</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/security">Security</Link>
                    </Button>
                </div>
            </main>
        </MarketingPageFrame>
    );
}
