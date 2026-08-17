import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/marketing/legal-page";
import { BRAND, COMPANY } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Cookies — ${BRAND}`,
    description: `How ${BRAND} uses cookies on the public site and in the house.`,
};

export default function CookiesPage() {
    return (
        <LegalPage
            eyebrow="Cookies"
            title="What stays in the browser."
            lede="A short list of the cookies and similar storage Quittance sets. We do not run an advertising network."
            updated="17 August 2026"
        >
            <LegalSection title="Strictly necessary">
                <p>
                    Session cookie — keeps you signed in while you move from
                    Inbox to Collect to the ledger. Cookie-consent flag —
                    remembers that you accepted this notice so the banner does
                    not follow you around the site.
                </p>
            </LegalSection>
            <LegalSection title="Product memory">
                <p>
                    The house keeps draft invoices, Collect rows, and Inbox
                    threads on this device so the desk does not go blank when
                    you refresh. That storage is for the product, not for ads.
                </p>
            </LegalSection>
            <LegalSection title="Analytics">
                <p>
                    We count which public pages are opened — Product, Pricing,
                    Careers — so we know what the corridor is reading. We do
                    not sell that count. We do not stitch it to a client’s
                    invoice.
                </p>
            </LegalSection>
            <LegalSection title="How to refuse">
                <p>
                    You can clear cookies in the browser. Signing out clears
                    the session. Clearing site data clears the local ledger on
                    that machine. Write {COMPANY.privacy} if a flag will not
                    drop.
                </p>
            </LegalSection>
        </LegalPage>
    );
}
