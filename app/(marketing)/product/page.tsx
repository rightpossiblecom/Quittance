import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND, BRAND_LINE, PRODUCT_SHOTS } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Product — ${BRAND}`,
    description: BRAND_LINE,
};

const CAPABILITIES = [
    "Inbox — WhatsApp, voice, and photo to a drafted invoice",
    "Collect — Paystack, M-Pesa, bank, WhatsApp chase",
    "Nudge and mark paid on the rail the client already uses",
    "Bill from and bill to, with TIN and house marks",
    "Line items with quantity, unit price, and running totals",
    "Live preview that matches the PDF",
    "Save and load the house ledger in the browser",
    "Export JSON, CSV, XLSX, XML",
] as const;

export default function ProductPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    Product
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    The invoice is the first asset. The collection is the second.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
                    Informal credit is how wealth leaves the continent. Quittance
                    writes the note from the chat the shop already sent, then
                    chases the payment on the rail the client already pays with.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild>
                        <Link href="/signup">Sign up</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/inbox">Inbox</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/collect">Collect</Link>
                    </Button>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {PRODUCT_SHOTS.map((shot) => (
                        <Card key={shot.src} className="overflow-hidden border-white/10">
                            <Image
                                src={shot.src}
                                alt={shot.title}
                                width={1200}
                                height={800}
                                className="h-auto w-full border-b border-white/10"
                            />
                            <CardHeader>
                                <CardTitle>{shot.title}</CardTitle>
                                <CardDescription>{shot.caption}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                <section className="mt-16">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        How it works
                    </h2>
                    <ol className="text-muted-foreground mt-4 max-w-2xl list-decimal space-y-2 pl-5 text-sm leading-relaxed md:text-base">
                        <li>Open an account. Any email and password lands you in the house.</li>
                        <li>Inbox reads a chat, a voice note, or a photo and drafts the invoice.</li>
                        <li>Confirm in the builder. Generate the PDF. Save it to the ledger.</li>
                        <li>Collect nudges on WhatsApp, Paystack, M-Pesa, or the bank. Mark paid when it lands.</li>
                    </ol>
                </section>

                <section className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        What the house holds
                    </h2>
                    <ul className="mt-4 grid gap-2 md:grid-cols-2">
                        {CAPABILITIES.map((item) => (
                            <li
                                key={item}
                                className="bg-card rounded-lg border border-white/10 px-4 py-3 text-sm"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="mt-12 flex flex-wrap gap-3">
                    <Button asChild size="lg">
                        <Link href="/signup">Sign up</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/collect">Collect</Link>
                    </Button>
                </div>
            </main>
        </MarketingPageFrame>
    );
}
