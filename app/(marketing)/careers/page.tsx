import type { Metadata } from "next";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND, COMPANY } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Careers — ${BRAND}`,
    description: `Open desks at ${BRAND} — Lagos, Accra, Johannesburg.`,
};

const ROLES = [
    {
        title: "Collections writer",
        city: "Lagos",
        type: "Full-time",
        body: "Sit with Yaba shops until a handshake becomes a note they will actually send. You own the words on the chase, not the code.",
    },
    {
        title: "Inbox engineer",
        city: "Accra",
        type: "Full-time",
        body: "Voice notes, photos of handwritten bills, WhatsApp threads. You make the draft good enough that the joiner only confirms.",
    },
    {
        title: "Rails engineer",
        city: "Johannesburg",
        type: "Full-time",
        body: "Paystack, M-Pesa, instant EFT. A missing rand on the board is your ticket. You work with Naledi.",
    },
    {
        title: "Corridor partner",
        city: "Nairobi",
        type: "Contract",
        body: "Walk Ngong Road wards and industrial parks. Teach the desk. Bring the first fifty houses onto Firm.",
    },
] as const;

export default function CareersPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    Careers
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    Come keep the paper in the house.
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
                    We hire people who have waited on a payment. The work is
                    Lagos mornings, Accra voice notes, Joburg rails. Write{" "}
                    <a
                        href={`mailto:${COMPANY.careers}`}
                        className="text-foreground underline"
                    >
                        {COMPANY.careers}
                    </a>{" "}
                    with the role in the subject and a page about the last
                    ledger you touched.
                </p>
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {ROLES.map((role) => (
                        <Card key={role.title} className="border-white/10">
                            <CardHeader>
                                <p className="quittance-gold text-[10px] tracking-[0.18em] uppercase">
                                    {role.city} · {role.type}
                                </p>
                                <CardTitle className="mt-1">{role.title}</CardTitle>
                                <CardDescription>{role.body}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </main>
        </MarketingPageFrame>
    );
}
