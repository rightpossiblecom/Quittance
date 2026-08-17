import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/marketing/legal-page";
import { BRAND, COMPANY } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Acceptable use — ${BRAND}`,
    description: `What you may and may not do with the ${BRAND} house.`,
};

export default function AcceptableUsePage() {
    return (
        <LegalPage
            eyebrow="Acceptable use"
            title="The house is for real work."
            lede="Quittance is for firms that invoice and collect. These rules sit beside the Terms."
            updated="17 August 2026"
        >
            <LegalSection title="You may">
                <p>
                    Draft invoices from a chat, a voice note, or a photo.
                    Chase a debt the firm is owed. Export the ledger for the
                    accountant. Seat colleagues on a Firm or Corridor plan.
                    Put the house mark on a note the client already expects.
                </p>
            </LegalSection>
            <LegalSection title="You may not">
                <p>
                    Forge a letterhead or a TIN. Chase a person for money the
                    house does not hold. Upload another firm’s books without
                    their leave. Flood WhatsApp, mail, or a rail with
                    unsolicited chase. Probe the product, scrape the public
                    pages for a list, or open an account for a child.
                </p>
            </LegalSection>
            <LegalSection title="If you break it">
                <p>
                    We suspend the house, keep the paper the law requires, and
                    write the address on the account. Repeat harm, or a forged
                    note, ends the account. Write {COMPANY.hello} if you think
                    we got that wrong.
                </p>
            </LegalSection>
        </LegalPage>
    );
}
