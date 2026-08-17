import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CORRIDORS, PRICING } from "@/lib/marketing/content";
import { ActivityStrip } from "./activity-strip";
import { MarketingPageFrame } from "./page-frame";

const STEPS = [
    { n: "1", title: "Inbox", body: "A WhatsApp, a voice note, a photo of the bill. Quittance reads it and drafts the invoice." },
    { n: "2", title: "Invoice", body: "The builder you already know. From & To, line items, the live preview, the PDF." },
    { n: "3", title: "Send", body: "The note leaves on the rail the client already uses — chat, mail, the house mark." },
    { n: "4", title: "Collect", body: "Paystack, M-Pesa, bank. Nudge on day 11. Mark paid when the money lands." },
    { n: "5", title: "Ledger", body: "Paid, chasing, overdue. The next child can open the house and see what is owed." },
] as const;

const FEATURES = [
    {
        title: "Draft from a chat",
        body: "Inbox turns a Yaba voice note or an Osu WhatsApp into line items. You confirm. The paper exists.",
    },
    {
        title: "Chase on their rail",
        body: "Collect speaks Paystack, M-Pesa, and the bank the shop already named. The reminder looks like a person, not a portal.",
    },
    {
        title: "A ledger that stays",
        body: "Save the invoice in the house. Load it next season. Wealth that was a handshake becomes a number the family can collect.",
    },
    {
        title: "Paper you can send",
        body: "PDF for the client. JSON, CSV, XLSX, XML for the accountant. The note and the chase live in one house.",
    },
] as const;

const FAQ = [
    {
        q: "Who is this for?",
        a: "African firms that still invoice on WhatsApp and wait. Joiners in Yaba, cloth houses in Osu, wards on Ngong Road, steel shops on Commissioner Street.",
    },
    {
        q: "Is the AI writing the invoice?",
        a: "Inbox reads the chat, the voice, the photo, and drafts the note. You send it. Collect writes the chase. The house still decides.",
    },
    {
        q: "Which rails?",
        a: "Paystack in Lagos. M-Pesa in Nairobi. Bank transfer wherever the account already lives. Naira, cedis, shillings, rand, francs, pounds.",
    },
    {
        q: "Is this a bank?",
        a: "No. Quittance writes the note and chases the payment. The rail still holds the money. The house still collects.",
    },
] as const;

export function MarketingLanding() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <section className="grid items-center gap-10 lg:grid-cols-2">
                    <div>
                        <ActivityStrip />
                        <p className="quittance-gold mb-3 text-xs font-medium tracking-[0.2em] uppercase">
                            AI collections · African firms
                        </p>
                        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                            WhatsApp is not a ledger.
                            <br />
                            Quittance writes the invoice and chases the payment.
                        </h1>
                        <p className="text-muted-foreground mt-5 max-w-xl text-base leading-relaxed md:text-lg">
                            A handshake is not an inheritance. For the joiner in
                            Lagos, the cloth house in Accra, the ward in
                            Nairobi, the steel shop in Johannesburg — we turn
                            the chat into paper, then collect on Paystack,
                            M-Pesa, or the bank the house already named.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button asChild size="lg">
                                <Link href="/signup">Open the house</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/inbox">See Inbox</Link>
                            </Button>
                        </div>
                    </div>
                    <Card className="overflow-hidden border-[#d4a017]/20">
                        <CardHeader>
                            <CardTitle>Collect</CardTitle>
                            <CardDescription>
                                Live rails. Adeyemi Trust is on day 11.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-0 pb-0">
                            <Image
                                src="/product/collect.svg"
                                alt="Quittance Collect board with payment rails"
                                width={1200}
                                height={800}
                                className="h-auto w-full"
                                priority
                            />
                        </CardContent>
                    </Card>
                </section>

                <section className="mt-16">
                    <p className="quittance-gold mb-4 text-xs font-medium tracking-[0.2em] uppercase">
                        Corridors
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {CORRIDORS.map((row) => (
                            <Card key={row.city} className="border-white/10 px-5 py-4">
                                <p className="font-semibold">{row.city}</p>
                                <p className="text-muted-foreground text-sm">{row.work}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mt-16">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        Five rooms. One collection.
                    </h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">
                        From the chat that started the job to the mark that
                        says the house was paid.
                    </p>
                    <div className="mt-6 grid gap-3 md:grid-cols-5">
                        {STEPS.map((step) => (
                            <Card key={step.n} className="border-white/10 px-4 py-4">
                                <p className="quittance-gold text-xs">{step.n}</p>
                                <p className="mt-1 font-semibold">{step.title}</p>
                                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                    {step.body}
                                </p>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mt-16 grid gap-4 md:grid-cols-2">
                    {FEATURES.map((feature) => (
                        <Card key={feature.title} className="border-white/10">
                            <CardHeader>
                                <CardTitle>{feature.title}</CardTitle>
                                <CardDescription>{feature.body}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </section>

                <section className="mt-16">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        A year on the rails
                    </h2>
                    <div className="mt-6 grid gap-4 lg:grid-cols-3">
                        {PRICING.map((tier) => (
                            <Card key={tier.name} className="flex flex-col border-white/10">
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
                </section>

                <section className="mt-16">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        Questions from the shop
                    </h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {FAQ.map((item) => (
                            <Card key={item.q} className="border-white/10">
                                <CardHeader>
                                    <CardTitle className="text-lg">{item.q}</CardTitle>
                                    <CardDescription>{item.a}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mt-16">
                    <Card className="border-[#d4a017]/25 px-6 py-10 text-center">
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                            Open an account. Collect the first note.
                        </h2>
                        <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm md:text-base">
                            The stairs are finished. The cloth is folded. The
                            ward is stocked. Write it down, chase it, file it
                            — this year, and the year after you.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <Button asChild size="lg">
                                <Link href="/signup">Sign up</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/collect">Collect</Link>
                            </Button>
                        </div>
                    </Card>
                </section>
            </main>
        </MarketingPageFrame>
    );
}
