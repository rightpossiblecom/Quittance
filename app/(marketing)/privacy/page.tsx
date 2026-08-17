import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/marketing/legal-page";
import { BRAND, COMPANY } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Privacy — ${BRAND}`,
    description: `How ${BRAND} treats the paper of the house.`,
};

export default function PrivacyPage() {
    return (
        <LegalPage
            eyebrow="Privacy"
            title="The ledger stays with the house."
            lede="Quittance Africa Limited is the controller of personal data processed through this product. We sit in Lagos. We write for firms that already keep their books on WhatsApp."
            updated="17 August 2026"
        >
            <LegalSection title="Who we are">
                <p>
                    {COMPANY.legal}, {COMPANY.address}. Write{" "}
                    {COMPANY.privacy} if you want a copy of what we hold, a
                    correction, or erasure.
                </p>
            </LegalSection>
            <LegalSection title="What we collect">
                <p>
                    Account details: name, work email, password hash, house
                    mark, and the corridor you invoice from. Invoice paper:
                    bill-from, bill-to, TIN, line items, bank instructions, and
                    the PDF you generate. Inbox: chats, voice notes, and photos
                    you upload so the house can draft a note. Collect: rail
                    choice, chase history, and mark-paid events. Billing: plan,
                    invoice for the subscription, and payment references from
                    Paystack or the bank.
                </p>
            </LegalSection>
            <LegalSection title="Why we hold it">
                <p>
                    To open your house, draft and store invoices, chase
                    payment, send a PDF, and keep the ledger the next name on
                    the door can open. We also use it to keep the product
                    standing, to bill Firm and Corridor plans, and to answer
                    you when you write.
                </p>
            </LegalSection>
            <LegalSection title="Who else sees it">
                <p>
                    Payment rails you choose — Paystack, M-Pesa, or the bank
                    named on the note — see what they need to move money. Mail
                    and file hosts see a PDF when you send one. We do not sell
                    lists. We do not follow you across the corridor with ads.
                </p>
            </LegalSection>
            <LegalSection title="How long">
                <p>
                    Account and ledger data stay while the house is open. You
                    can delete a note from Invoices. You can close the account
                    and we erase what the law lets us erase within thirty days.
                    Tax paper we must keep, we keep for the corridor that
                    requires it.
                </p>
            </LegalSection>
            <LegalSection title="Your rights">
                <p>
                    Under the Nigeria Data Protection Act, Ghana’s Data
                    Protection Act, Kenya’s Data Protection Act, and South
                    Africa’s POPIA, you may access, correct, delete, or
                    restrict what we hold, and you may object to a chase we
                    send in your name. Write {COMPANY.privacy}. A child does
                    not open a house here.
                </p>
            </LegalSection>
            <LegalSection title="Security">
                <p>
                    Sessions travel over HTTPS. Passwords are hashed. Staff
                    who can open a ledger do so from a named desk, for a named
                    ticket. Read the Security page for the rest of the house
                    rules.
                </p>
            </LegalSection>
        </LegalPage>
    );
}
