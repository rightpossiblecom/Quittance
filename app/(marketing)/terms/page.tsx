import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/marketing/legal-page";
import { BRAND, COMPANY } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Terms — ${BRAND}`,
    description: `Terms for using the ${BRAND} ledger.`,
};

export default function TermsPage() {
    return (
        <LegalPage
            eyebrow="Terms"
            title="The house, the paper, the use."
            lede="These terms govern your use of Quittance. By creating an account you agree to them for yourself and for the firm whose books you keep."
            updated="17 August 2026"
        >
            <LegalSection title="The product">
                <p>
                    Quittance is a tool for writing invoices and chasing
                    payment. It is not a bank, a licensed collector, or a
                    court. You are responsible for the numbers on the note,
                    the tax the corridor requires, and the words you send to a
                    client.
                </p>
            </LegalSection>
            <LegalSection title="The account">
                <p>
                    One person opens the house. You keep the password. You do
                    not share a Firm or Corridor seat with a stranger. If you
                    leave the firm, the firm writes {COMPANY.hello} and we
                    move the ledger to the next name on the door.
                </p>
            </LegalSection>
            <LegalSection title="The paper">
                <p>
                    Invoices, chats, voice notes, and photos you put in Inbox
                    stay yours. You grant us a licence to process them so the
                    house can draft, store, export, and chase. You will not
                    upload another person’s books without the right to do so.
                </p>
            </LegalSection>
            <LegalSection title="The rails">
                <p>
                    Paystack, M-Pesa, and the bank hold the money. Their
                    terms sit beside ours. A failed transfer is a matter for
                    the rail. A failed PDF is a matter for us — try again, or
                    export JSON and keep the books until the note generates.
                </p>
            </LegalSection>
            <LegalSection title="Plans">
                <p>
                    House is free. Firm and Corridor are billed as shown on
                    Pricing. Fees are in naira unless we write otherwise.
                    Refunds follow the Refunds page.
                </p>
            </LegalSection>
            <LegalSection title="Acceptable use">
                <p>
                    You will not use Quittance to forge a note, to chase a
                    debt you do not hold, or to send spam down a WhatsApp
                    rail. The Acceptable use page is part of these terms.
                </p>
            </LegalSection>
            <LegalSection title="Liability">
                <p>
                    The templates, the preview, and the export are offered as
                    they stand. We are not liable for a missed collection, a
                    tax assessment, or a number you confirmed. Our liability
                    in a year is capped at the fees you paid us in that year.
                </p>
            </LegalSection>
            <LegalSection title="Law">
                <p>
                    These terms are governed by the laws of the Federal
                    Republic of Nigeria. Disputes sit first with the desk in
                    Lagos, then with the courts of Lagos State. {COMPANY.legal}
                    , {COMPANY.address}.
                </p>
            </LegalSection>
        </LegalPage>
    );
}
