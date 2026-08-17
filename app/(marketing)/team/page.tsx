import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND, MARKETING_TEAM } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Team — ${BRAND}`,
    description: `The people building ${BRAND} — AI collections for African firms.`,
};

export default function TeamPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    Team
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    A house in Lagos, Accra, and Johannesburg.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
                    Quittance is built by people who have sat with a shop’s
                    books and watched a finished job leave without a chase.
                    Three seats. Inbox, Collect, one ledger.
                </p>

                <ul className="mt-10 grid gap-6 md:grid-cols-3">
                    {MARKETING_TEAM.map((person) => (
                        <li key={person.name}>
                            <Card className="h-full">
                                <CardContent className="pt-6">
                                    <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-full text-sm font-semibold">
                                        {person.initials}
                                    </div>
                                    <h2 className="mt-4 text-xl font-semibold tracking-tight">
                                        {person.name}
                                    </h2>
                                    <p className="text-foreground mt-1 text-sm">
                                        {person.role}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                        {person.city} · {person.expertise}
                                    </p>
                                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                        {person.bio}
                                    </p>
                                    <a
                                        href={person.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary mt-4 inline-flex min-h-11 items-center text-sm hover:underline"
                                    >
                                        LinkedIn
                                    </a>
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>

                <div className="mt-10">
                    <Button asChild>
                        <Link href="/signup">Sign up</Link>
                    </Button>
                </div>
            </main>
        </MarketingPageFrame>
    );
}
