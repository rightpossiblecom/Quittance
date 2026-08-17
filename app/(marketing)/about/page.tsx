import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `About — ${BRAND}`,
    description: `${BRAND} is the AI that writes invoices and collects payment for African firms.`,
};

export default function AboutPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    About
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    A quittance is the paper that closes a debt — and the chase that makes it real.
                </h1>
                <div className="text-muted-foreground mt-6 max-w-2xl space-y-4 text-base leading-relaxed">
                    <p>
                        On this continent a great deal of wealth still lives in
                        a WhatsApp thread. The joiner is paid “next month.” The
                        cloth house is paid after the naming. The ward is paid
                        when the ministry remembers. The child who inherits the
                        shop inherits the waiting.
                    </p>
                    <p>
                        Quittance is an AI collections house. Inbox reads the
                        chat, the voice, the photo, and drafts the invoice.
                        Collect chases on Paystack, M-Pesa, or the bank the
                        shop already named. The builder stays the desk a firm
                        can finish in one sitting.
                    </p>
                    <p>
                        The product is a tool. The story is ownership that
                        outlives one founder. Write the note. Chase it. Hand
                        the ledger to the next name on the door.
                    </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild>
                        <Link href="/signup">Sign up</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/team">Team</Link>
                    </Button>
                </div>
            </main>
        </MarketingPageFrame>
    );
}
