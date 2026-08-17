import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/marketing/legal-page";
import { BRAND, COMPANY } from "@/lib/marketing/content";

export const metadata: Metadata = {
    title: `Refunds — ${BRAND}`,
    description: `Billing and refunds for ${BRAND} House, Firm, and Corridor plans.`,
};

export default function RefundsPage() {
    return (
        <LegalPage
            eyebrow="Refunds"
            title="What we bill, and what we return."
            lede="House is free. Firm and Corridor are paid plans. This page is the billing desk."
            updated="17 August 2026"
        >
            <LegalSection title="When we charge">
                <p>
                    Firm is ₦48,000 a year, billed when you move off House.
                    Corridor is quoted. We take Paystack or a Nigerian bank
                    transfer. A receipt lands in the mailbox on the account.
                </p>
            </LegalSection>
            <LegalSection title="Fourteen days">
                <p>
                    If Firm has not issued more than five notes, write{" "}
                    {COMPANY.hello} within fourteen days of the charge and we
                    return the year in full. After that, the year stands. We
                    do not prorate a quiet month.
                </p>
            </LegalSection>
            <LegalSection title="Corridor">
                <p>
                    Corridor fees follow the order we sent you. A deposit is
                    not refundable once a shared Collect board is live. Unused
                    seats can move to another desk in the same group.
                </p>
            </LegalSection>
            <LegalSection title="Failed rails">
                <p>
                    A client who does not pay you is not a refund of your
                    Quittance plan. A PDF that fails once is not a refund —
                    generate again or write the house. A double charge is a
                    refund. Send the two receipts.
                </p>
            </LegalSection>
        </LegalPage>
    );
}
