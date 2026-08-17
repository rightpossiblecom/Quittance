import type { Metadata } from "next";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Privacy — ${BRAND}`,
    description: `How ${BRAND} treats the paper of the house.`,
};

export default function PrivacyPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="text-muted-foreground text-xs tracking-wider uppercase">
                    Privacy
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
                    The ledger stays with the house.
                </h1>
                <div className="text-muted-foreground mt-6 max-w-2xl space-y-4 text-base leading-relaxed">
                    <p>
                        Invoices you write in Quittance are stored in this
                        browser. We do not run a customer database for the
                        demo. A session is an email on this machine.
                    </p>
                    <p>
                        If you send a PDF, the address you type is used for
                        that send only. We do not sell lists. We do not follow
                        you across the corridor with ads.
                    </p>
                    <p>
                        Write privacy@quittance.africa if you want a copy of
                        what this browser holds, or if you want it gone.
                    </p>
                </div>
            </main>
        </MarketingPageFrame>
    );
}
