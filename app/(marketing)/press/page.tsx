import type { Metadata } from "next";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND, BRAND_LINE, COMPANY } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Press — ${BRAND}`,
    description: `Press kit and desk for ${BRAND}.`,
};

const MENTIONS = [
    {
        outlet: "TechCabal",
        date: "June 2026",
        line: "WhatsApp is not a ledger — a Lagos house that writes the invoice and then chases it.",
    },
    {
        outlet: "Disrupt Africa",
        date: "April 2026",
        line: "Quittance puts Paystack and M-Pesa on the same Collect board as the chat the shop already lives in.",
    },
    {
        outlet: "Business Day",
        date: "March 2026",
        line: "Adanna Okonkwo on informal credit, and why the child who inherits the shop inherits the waiting.",
    },
] as const;

export default function PressPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    Press
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    The line we stand on.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
                    {BRAND_LINE} For interviews, screenshots, and the mark,
                    write{" "}
                    <a
                        href={`mailto:${COMPANY.press}`}
                        className="text-foreground underline"
                    >
                        {COMPANY.press}
                    </a>
                    .
                </p>
                <Card className="mt-8 max-w-2xl border-white/10">
                    <CardHeader>
                        <CardTitle>Boilerplate</CardTitle>
                        <CardDescription>
                            Quittance is an AI collections house for African
                            firms. Inbox turns a WhatsApp, a voice note, or a
                            photo into a drafted invoice. Collect chases on
                            Paystack, M-Pesa, or the bank the client already
                            uses. The company is {COMPANY.legal}, based in
                            Lagos, with desks in Accra, Nairobi, and
                            Johannesburg. Founder: Adanna Okonkwo.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <h2 className="mt-12 text-2xl font-semibold tracking-tight">
                    Selected coverage
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {MENTIONS.map((row) => (
                        <Card key={row.outlet} className="border-white/10">
                            <CardHeader>
                                <p className="quittance-gold text-[10px] tracking-[0.18em] uppercase">
                                    {row.date}
                                </p>
                                <CardTitle>{row.outlet}</CardTitle>
                                <CardDescription>{row.line}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </main>
        </MarketingPageFrame>
    );
}
