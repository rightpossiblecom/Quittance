// Types
import { SignatureColor, SignatureFont } from "@/types";
import { LAGOS_JOINERY } from "@/lib/demo/seed-invoices";

/**
 * Environment
 */
export const ENV = process.env.NODE_ENV;

/**
 * Websites
 */
export const BASE_URL = "https://quittance.africa";
export const AUTHOR_WEBSITE = "https://quittance.africa/team";
export const AUTHOR_GITHUB = "https://quittance.africa";

/**
 * API endpoints
 */
export const GENERATE_PDF_API = "/api/invoice/generate";
export const SEND_PDF_API = "/api/invoice/send";
export const EXPORT_INVOICE_API = "/api/invoice/export";

/**
 * External API endpoints
 */
export const CURRENCIES_API =
  "https://openexchangerates.org/api/currencies.json";

/**
 * Local storage
 */
export const LOCAL_STORAGE_INVOICE_DRAFT_KEY = "quittance:invoiceDraft";

/**
 * Tailwind
 */
export const TAILWIND_CDN =
  "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";

/**
 * Google
 */
export const GOOGLE_SC_VERIFICATION = process.env.GOOGLE_SC_VERIFICATION;

/**
 * Nodemailer
 */
export const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
export const NODEMAILER_PW = process.env.NODEMAILER_PW;

/**
 * I18N
 */
export const LOCALES = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "es", name: "Español" },
  { code: "ca", name: "Català" },
  { code: "fr", name: "Français" },
  { code: "ar", name: "العربية" },
  { code: "pl", name: "Polish" },
  { code: "pt-BR", name: "Português (Brasil)" },
  { code: "tr", name: "Türkçe" },
  { code: "zh-CN", name: "简体中文" },
  { code: "ja", name: "日本語" },
  { code: "nb-NO", name: "Norwegian (bokmål)" },
  { code: "nn-NO", name: "Norwegian (nynorsk)" },
];
export const DEFAULT_LOCALE = LOCALES[0].code;

/**
 * Signature variables
 */
export const SIGNATURE_COLORS: SignatureColor[] = [
  { name: "black", label: "Black", color: "rgb(0, 0, 0)" },
  { name: "dark blue", label: "Dark Blue", color: "rgb(0, 0, 128)" },
  {
    name: "crimson",
    label: "Crimson",
    color: "#DC143C",
  },
];

export const SIGNATURE_FONTS: SignatureFont[] = [
  {
    name: "Dancing Script",
    variable: "var(--font-dancing-script)",
  },
  { name: "Parisienne", variable: "var(--font-parisienne)" },
  {
    name: "Great Vibes",
    variable: "var(--font-great-vibes)",
  },
  {
    name: "Alex Brush",
    variable: "var(--font-alex-brush)",
  },
];

/**
 * Form date options
 */
export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const SHORT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

/**
 * Form defaults
 */
export const FORM_DEFAULT_VALUES = LAGOS_JOINERY;

/**
 * ? DEV Only
 * Form auto fill values for testing
 */
export const FORM_FILL_VALUES = {
  sender: {
    name: "Iroko Joinery Ltd",
    address: "14 Adeola Odeku Street",
    zipCode: "101241",
    city: "Lagos",
    country: "Nigeria",
    email: "books@iroko.ng",
    phone: "+234 803 441 2290",
  },
  receiver: {
    name: "Adeyemi Family Trust",
    address: "8 Bourdillon Road",
    zipCode: "101233",
    city: "Lagos",
    country: "Nigeria",
    email: "estate@adeyemi.ng",
    phone: "+234 701 882 1144",
  },
  details: {
    invoiceLogo: "",
    invoiceNumber: "INV0001",
    invoiceDate: new Date(),
    dueDate: new Date(),
    items: [
      {
        name: "Product 1",
        description: "Description of Product 1",
        quantity: 4,
        unitPrice: 50,
        total: 200,
      },
      {
        name: "Product 2",
        description: "Description of Product 2",
        quantity: 5,
        unitPrice: 50,
        total: 250,
      },
      {
        name: "Product 3",
        description: "Description of Product 3",
        quantity: 5,
        unitPrice: 80,
        total: 400,
      },
    ],
    currency: "USD",
    language: "English",
    taxDetails: {
      amount: 15,
      amountType: "percentage",
      taxID: "987654321",
    },
    discountDetails: {
      amount: 5,
      amountType: "percentage",
    },
    shippingDetails: {
      cost: 5,
      costType: "percentage",
    },
    paymentInformation: {
      bankName: "Bank Inc.",
      accountName: "John Doe",
      accountNumber: "445566998877",
    },
    additionalNotes: "Thank you for your business",
    paymentTerms: "Net 30",
    signature: {
      data: "",
    },
    subTotal: "850",
    totalAmount: "850",
    totalAmountInWords: "Eight Hundred Fifty",
    pdfTemplate: 1,
  },
};
