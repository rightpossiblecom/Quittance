import { InvoiceType } from "@/types";

export const SAVED_INVOICES_KEY = "savedInvoices";

const note = (
    invoice: InvoiceType,
    updatedAt: string
): InvoiceType => ({
    ...invoice,
    details: {
        ...invoice.details,
        updatedAt,
    },
});

export const LAGOS_JOINERY = {
    sender: {
        name: "Iroko Joinery Ltd",
        address: "14 Adeola Odeku Street",
        zipCode: "101241",
        city: "Lagos",
        country: "Nigeria",
        email: "books@iroko.ng",
        phone: "+234 803 441 2290",
        customInputs: [{ key: "TIN", value: "12345678-0001" }],
    },
    receiver: {
        name: "Adeyemi Family Trust",
        address: "8 Bourdillon Road",
        zipCode: "101233",
        city: "Lagos",
        country: "Nigeria",
        email: "estate@adeyemi.ng",
        phone: "+234 701 882 1144",
        customInputs: [],
    },
    details: {
        invoiceLogo: "",
        invoiceNumber: "QT-1044",
        invoiceDate: new Date("2026-07-02"),
        dueDate: new Date("2026-08-01"),
        items: [
            {
                name: "Staircase and landing",
                description: "Iroko treads, brass nosing, Ikoyi townhouse",
                quantity: 1,
                unitPrice: 4200000,
                total: 4200000,
            },
            {
                name: "Library shelving",
                description: "Wall-to-wall, three bays, oil finish",
                quantity: 3,
                unitPrice: 980000,
                total: 2940000,
            },
        ],
        currency: "NGN",
        language: "English",
        taxDetails: {
            amount: 7.5,
            amountType: "percentage",
            taxID: "NG-VAT-441",
        },
        discountDetails: {
            amount: 0,
            amountType: "amount",
        },
        shippingDetails: {
            cost: 85000,
            costType: "amount",
        },
        paymentInformation: {
            bankName: "Guaranty Trust Bank",
            accountName: "Iroko Joinery Ltd",
            accountNumber: "0128842291",
        },
        additionalNotes: "Balance due before the stairs leave the Yaba shop.",
        paymentTerms: "Net 30. Transfer in naira to the house account.",
        subTotal: 7140000,
        totalAmount: 7760500,
        totalAmountInWords: "Seven million seven hundred sixty thousand five hundred naira",
        pdfTemplate: 1,
        updatedAt: "Jul 12, 2026",
    },
} as unknown as InvoiceType;

export const SEEDED_INVOICES = [
    note(LAGOS_JOINERY, "Jul 12, 2026"),
    {
        sender: {
            name: "Maison Sika Cloth",
            address: "22 Oxford Street, Osu",
            zipCode: "GA-039",
            city: "Accra",
            country: "Ghana",
            email: "books@sika.gh",
            phone: "+233 24 611 8830",
        },
        receiver: {
            name: "Nkrumah House",
            address: "4 Independence Avenue",
            zipCode: "GA-184",
            city: "Accra",
            country: "Ghana",
            email: "house@nkrumah.gh",
            phone: "+233 20 445 1192",
        },
        details: {
            invoiceLogo: "",
            invoiceNumber: "QT-1108",
            invoiceDate: new Date("2026-06-18"),
            dueDate: new Date("2026-07-18"),
            items: [
                {
                    name: "Kente wrappers, family set",
                    description: "Eight cloths for the naming and the archive",
                    quantity: 8,
                    unitPrice: 2400,
                    total: 19200,
                },
                {
                    name: "Embroidery on the house mark",
                    description: "Gold thread, each wrapper",
                    quantity: 8,
                    unitPrice: 180,
                    total: 1440,
                },
            ],
            currency: "GHS",
            language: "English",
            taxDetails: {
                amount: 15,
                amountType: "percentage",
                taxID: "GH-VAT-882",
            },
            discountDetails: { amount: 5, amountType: "percentage" },
            shippingDetails: { cost: 120, costType: "amount" },
            paymentInformation: {
                bankName: "Absa Ghana",
                accountName: "Maison Sika Cloth",
                accountNumber: "0042281193",
            },
            additionalNotes: "Cloth leaves the shop when the note is settled.",
            paymentTerms: "Net 30. Cedis to the Osu account.",
            subTotal: 20640,
            totalAmount: 22698,
            totalAmountInWords: "Twenty-two thousand six hundred ninety-eight cedis",
            pdfTemplate: 2,
            updatedAt: "Jun 22, 2026",
        },
    },
    {
        sender: {
            name: "Ward Supply Nairobi",
            address: "11 Ngong Road",
            zipCode: "00100",
            city: "Nairobi",
            country: "Kenya",
            email: "pay@ward.ke",
            phone: "+254 722 118 440",
        },
        receiver: {
            name: "Kileleshwa Clinic",
            address: "3 Ring Road Parklands",
            zipCode: "00600",
            city: "Nairobi",
            country: "Kenya",
            email: "matron@kile.ke",
            phone: "+254 733 902 118",
        },
        details: {
            invoiceLogo: "",
            invoiceNumber: "QT-2219",
            invoiceDate: new Date("2026-07-21"),
            dueDate: new Date("2026-08-20"),
            items: [
                {
                    name: "Ward linen, cotton",
                    description: "Sheets and pillowcases, paediatric wing",
                    quantity: 120,
                    unitPrice: 1850,
                    total: 222000,
                },
                {
                    name: "Instrument trays",
                    description: "Stainless, autoclave-ready",
                    quantity: 18,
                    unitPrice: 6400,
                    total: 115200,
                },
            ],
            currency: "KES",
            language: "English",
            taxDetails: {
                amount: 16,
                amountType: "percentage",
                taxID: "KE-PIN-A001",
            },
            discountDetails: { amount: 0, amountType: "amount" },
            shippingDetails: { cost: 4500, costType: "amount" },
            paymentInformation: {
                bankName: "Equity Bank",
                accountName: "Ward Supply Nairobi",
                accountNumber: "018029334421",
            },
            additionalNotes: "Delivered to the Kileleshwa loading bay.",
            paymentTerms: "Net 30. Shillings to Equity.",
            subTotal: 337200,
            totalAmount: 395652,
            totalAmountInWords: "Three hundred ninety-five thousand six hundred fifty-two shillings",
            pdfTemplate: 1,
            updatedAt: "Jul 24, 2026",
        },
    },
    {
        sender: {
            name: "Kin Steel Johannesburg",
            address: "45 Commissioner Street",
            zipCode: "2001",
            city: "Johannesburg",
            country: "South Africa",
            email: "accounts@kin.za",
            phone: "+27 11 334 8821",
        },
        receiver: {
            name: "Mokoena Family Office",
            address: "12 West Street, Sandton",
            zipCode: "2196",
            city: "Johannesburg",
            country: "South Africa",
            email: "office@mokoena.za",
            phone: "+27 82 441 2290",
        },
        details: {
            invoiceLogo: "",
            invoiceNumber: "QT-3301",
            invoiceDate: new Date("2026-05-09"),
            dueDate: new Date("2026-06-08"),
            items: [
                {
                    name: "Mezzanine steel",
                    description: "Sandton archive floor, powder-coated",
                    quantity: 1,
                    unitPrice: 186000,
                    total: 186000,
                },
                {
                    name: "Balustrade, brass",
                    description: "Handrail and newels, family stair",
                    quantity: 1,
                    unitPrice: 64000,
                    total: 64000,
                },
            ],
            currency: "ZAR",
            language: "English",
            taxDetails: {
                amount: 15,
                amountType: "percentage",
                taxID: "ZA-VAT-441122",
            },
            discountDetails: { amount: 0, amountType: "amount" },
            shippingDetails: { cost: 2800, costType: "amount" },
            paymentInformation: {
                bankName: "Standard Bank",
                accountName: "Kin Steel Johannesburg",
                accountNumber: "1004482291",
            },
            additionalNotes: "Steel is tagged to the Mokoena job.",
            paymentTerms: "Net 30. Rand to Standard Bank.",
            subTotal: 250000,
            totalAmount: 290200,
            totalAmountInWords: "Two hundred ninety thousand two hundred rand",
            pdfTemplate: 2,
            updatedAt: "May 14, 2026",
        },
    },
    {
        sender: {
            name: "Kora Freight Kigali",
            address: "KN 3 Road, Kimihurura",
            zipCode: "00000",
            city: "Kigali",
            country: "Rwanda",
            email: "desk@kora.rw",
            phone: "+250 788 221 094",
        },
        receiver: {
            name: "Kampala Import House",
            address: "Plot 18 Kampala Road",
            zipCode: "256",
            city: "Kampala",
            country: "Uganda",
            email: "pay@import.ug",
            phone: "+256 772 441 880",
        },
        details: {
            invoiceLogo: "",
            invoiceNumber: "QT-4412",
            invoiceDate: new Date("2026-07-28"),
            dueDate: new Date("2026-08-27"),
            items: [
                {
                    name: "Corridor haul, Kigali–Kampala",
                    description: "Two containers, sealed, family goods",
                    quantity: 2,
                    unitPrice: 1850000,
                    total: 3700000,
                },
            ],
            currency: "RWF",
            language: "English",
            taxDetails: {
                amount: 18,
                amountType: "percentage",
                taxID: "RW-TIN-1022",
            },
            discountDetails: { amount: 0, amountType: "amount" },
            shippingDetails: { cost: 0, costType: "amount" },
            paymentInformation: {
                bankName: "Bank of Kigali",
                accountName: "Kora Freight Kigali",
                accountNumber: "000401188229",
            },
            additionalNotes: "Papers travel with the driver.",
            paymentTerms: "Net 30. Francs to Bank of Kigali.",
            subTotal: 3700000,
            totalAmount: 4366000,
            totalAmountInWords: "Four million three hundred sixty-six thousand francs",
            pdfTemplate: 1,
            updatedAt: "Jul 30, 2026",
        },
    },
    {
        sender: {
            name: "Azhar Stone Works",
            address: "9 Talaat Harb Street",
            zipCode: "11511",
            city: "Cairo",
            country: "Egypt",
            email: "stone@azhar.eg",
            phone: "+20 2 2574 1190",
        },
        receiver: {
            name: "Alexandria Kin Trust",
            address: "22 Corniche, Gleem",
            zipCode: "21532",
            city: "Alexandria",
            country: "Egypt",
            email: "trust@gleem.eg",
            phone: "+20 3 546 2281",
        },
        details: {
            invoiceLogo: "",
            invoiceNumber: "QT-5506",
            invoiceDate: new Date("2026-04-11"),
            dueDate: new Date("2026-05-11"),
            items: [
                {
                    name: "Limestone courtyard",
                    description: "Gleem house, 80 square metres",
                    quantity: 80,
                    unitPrice: 420,
                    total: 33600,
                },
                {
                    name: "Fountain basin",
                    description: "Carved, family mark on the rim",
                    quantity: 1,
                    unitPrice: 18500,
                    total: 18500,
                },
            ],
            currency: "EGP",
            language: "English",
            taxDetails: {
                amount: 14,
                amountType: "percentage",
                taxID: "EG-VAT-7781",
            },
            discountDetails: { amount: 0, amountType: "amount" },
            shippingDetails: { cost: 900, costType: "amount" },
            paymentInformation: {
                bankName: "CIB Egypt",
                accountName: "Azhar Stone Works",
                accountNumber: "1000228841",
            },
            additionalNotes: "Stone is cut to the Gleem drawings.",
            paymentTerms: "Net 30. Pounds to CIB.",
            subTotal: 52100,
            totalAmount: 60274,
            totalAmountInWords: "Sixty thousand two hundred seventy-four pounds",
            pdfTemplate: 2,
            updatedAt: "Apr 16, 2026",
        },
    },
] as unknown as InvoiceType[];

export function writeSavedInvoices(invoices: InvoiceType[]) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(SAVED_INVOICES_KEY, JSON.stringify(invoices));
}

export function upsertSavedInvoice(invoice: InvoiceType) {
    const current = readSavedInvoices();
    const number = invoice.details.invoiceNumber;
    const next = current.some((row) => row.details.invoiceNumber === number)
        ? current.map((row) =>
              row.details.invoiceNumber === number ? invoice : row
          )
        : [invoice, ...current];
    writeSavedInvoices(next);
    return next;
}

export function readSavedInvoices(): InvoiceType[] {
    if (typeof window === "undefined") return SEEDED_INVOICES;
    try {
        const raw = window.localStorage.getItem(SAVED_INVOICES_KEY);
        if (!raw) {
            window.localStorage.setItem(
                SAVED_INVOICES_KEY,
                JSON.stringify(SEEDED_INVOICES)
            );
            return SEEDED_INVOICES;
        }
        const parsed = JSON.parse(raw) as InvoiceType[];
        if (!Array.isArray(parsed) || parsed.length === 0) {
            window.localStorage.setItem(
                SAVED_INVOICES_KEY,
                JSON.stringify(SEEDED_INVOICES)
            );
            return SEEDED_INVOICES;
        }
        return parsed;
    } catch {
        return SEEDED_INVOICES;
    }
}
