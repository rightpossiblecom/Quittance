import type { Metadata } from "next";
import { MarketingPageFrame } from "@/components/marketing/page-frame";
import { BRAND } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Terms — ${BRAND}`,
    description: `Terms for using the ${BRAND} ledger.`,
};

export default function TermsPage() {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="text-muted-foreground text-xs tracking-wider uppercase">
                    Terms
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
                    The house, the paper, the use.
                </h1>
                <div className="text-muted-foreground mt-6 max-w-2xl space-y-4 text-base leading-relaxed">
                    <p>
                        Quittance is a tool for writing invoices. It is not a
                        bank, a collector, or a court. You are responsible for
                        the numbers you put on the note and for the tax the
                        corridor requires.
                    </p>
                    <p>
                        This public ledger is a working demonstration. Any
                        email and password opens an account. Do not put a
                        secret you cannot lose into the form.
                    </p>
                    <p>
                        The templates, the preview, and the export are offered
                        as they stand. If a PDF fails, try again or export the
                        JSON and keep the books another way until the note
                        generates.
                    </p>
                </div>
            </main>
        </MarketingPageFrame>
    );
}
