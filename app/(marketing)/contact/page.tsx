import type { Metadata } from "next";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Contact — ${BRAND}`,
    description: `Write to the ${BRAND} house.`,
};

const BOXES = [
    {
        label: "House",
        email: "hello@quittance.africa",
        note: "Inbox, Collect, a note that will not generate.",
    },
    {
        label: "Corridor",
        email: "corridor@quittance.africa",
        note: "Firms that invoice across Lagos, Accra, Nairobi, and Joburg.",
    },
    {
        label: "Privacy",
        email: "privacy@quittance.africa",
        note: "Access, erasure, and the paper we hold about you.",
    },
] as const;

export default function ContactPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    Contact
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    Write to the house.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
                    We sit in Lagos, Accra, and Johannesburg. Mail reaches the
                    desk that can answer it.
                </p>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {BOXES.map((box) => (
                        <Card key={box.label}>
                            <CardHeader>
                                <CardTitle>{box.label}</CardTitle>
                                <a
                                    href={`mailto:${box.email}`}
                                    className="text-primary text-sm hover:underline"
                                >
                                    {box.email}
                                </a>
                                <CardDescription>{box.note}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </main>
        </MarketingPageFrame>
    );
}
