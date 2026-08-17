import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND, PRICING } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Pricing — ${BRAND}`,
    description: `House, Firm, and Corridor collections on ${BRAND}.`,
};

export default function PricingPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    Pricing
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    A year on the rails.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
                    Start with Inbox and Collect. Grow into the firm. Call us
                    when the chase crosses a border.
                </p>
                <div className="mt-10 grid gap-4 lg:grid-cols-3">
                    {PRICING.map((tier) => (
                        <Card key={tier.name} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{tier.name}</CardTitle>
                                <p className="text-2xl font-semibold">{tier.price}</p>
                                <CardDescription>{tier.detail}</CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto">
                                <ul className="text-muted-foreground space-y-1 text-sm">
                                    {tier.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                                <Button asChild className="mt-6 w-full">
                                    <Link href="/signup">Sign up</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </MarketingPageFrame>
    );
}
