export const BRAND = "Quittance";

export const BRAND_LINE =
    "The AI that writes the invoice and collects the money — African firms, WhatsApp to Paystack to the family ledger.";

export const MARKETING_NAV = [
    { href: "/product", label: "Product" },
    { href: "/team", label: "Team" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
] as const;

export const APP_RAIL = [
    { href: "/inbox", label: "Inbox" },
    { href: "/collect", label: "Collect" },
    { href: "/invoice", label: "Invoice" },
    { href: "/invoices", label: "Invoices" },
] as const;

export const COMPANY = {
    legal: "Quittance Africa Limited",
    address: "12 Idejo Street, Victoria Island, Lagos, Nigeria",
    desks: "Lagos · Accra · Nairobi · Johannesburg",
    hello: "hello@quittance.africa",
    privacy: "privacy@quittance.africa",
    security: "security@quittance.africa",
    press: "press@quittance.africa",
    careers: "careers@quittance.africa",
} as const;

export const FOOTER_COLUMNS = [
    {
        title: "Product",
        links: [
            { href: "/product", label: "Product" },
            { href: "/pricing", label: "Pricing" },
            { href: "/changelog", label: "Changelog" },
            { href: "/status", label: "Status" },
        ],
    },
    {
        title: "Company",
        links: [
            { href: "/about", label: "About" },
            { href: "/team", label: "Team" },
            { href: "/careers", label: "Careers" },
            { href: "/press", label: "Press" },
            { href: "/contact", label: "Contact" },
        ],
    },
    {
        title: "Trust",
        links: [
            { href: "/security", label: "Security" },
            { href: "/help", label: "Help" },
            { href: "/privacy", label: "Privacy" },
            { href: "/cookies", label: "Cookies" },
        ],
    },
    {
        title: "Legal",
        links: [
            { href: "/terms", label: "Terms" },
            { href: "/acceptable-use", label: "Acceptable use" },
            { href: "/refunds", label: "Refunds" },
            { href: "/login", label: "Log in" },
            { href: "/signup", label: "Sign up" },
        ],
    },
] as const;

export const MARKETING_FOOTER_LEGAL = [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/cookies", label: "Cookies" },
    { href: "/security", label: "Security" },
] as const;

export const CORRIDORS = [
    { city: "Lagos", work: "WhatsApp drafts · Paystack rails" },
    { city: "Accra", work: "Voice notes · bank chase" },
    { city: "Nairobi", work: "Photo bills · M-Pesa" },
    { city: "Johannesburg", work: "Steel notes · instant EFT" },
    { city: "Kigali", work: "Corridor freight · scheduled nudge" },
    { city: "Cairo", work: "Stone ledgers · CIB transfer" },
] as const;

export const LIVE_STRIP = [
    "Chasing Adeyemi Trust on WhatsApp · ₦7.14m · Net 30",
    "Paid · Kileleshwa Clinic · M-Pesa · KSh 395,652",
    "Inbox · Osu cloth house · voice note ready to extract",
    "Nudge queued · Kora Freight · tomorrow 9:00 WAT",
] as const;

export const MARKETING_TEAM = [
    {
        name: "Adanna Okonkwo",
        role: "Founder · Collections",
        city: "Lagos",
        expertise: "WhatsApp chase, family firms",
        bio: "Adanna ran a Yaba joinery’s books for eight years and watched finished stairs leave on a handshake. She built Quittance so the house writes the note and then actually collects — Paystack, bank, the chat the client already lives in.",
        linkedin: "https://www.linkedin.com/in/adanna-okonkwo-quittance",
        initials: "AO",
    },
    {
        name: "Kwame Boateng",
        role: "Product · Inbox",
        city: "Accra",
        expertise: "WhatsApp intake, voice to line items",
        bio: "Kwame sits with Osu shops until a voice note becomes a clean invoice. He owns Inbox — the room that turns a chat, a photo, or a mumbled total into paper the next child can collect on.",
        linkedin: "https://www.linkedin.com/in/kwame-boateng-quittance",
        initials: "KB",
    },
    {
        name: "Naledi Mokoena",
        role: "Engineering · Rails",
        city: "Johannesburg",
        expertise: "Paystack, M-Pesa, bank rails",
        bio: "Naledi owns Collect. A missing naira on a chase is a failure of the house. She wires the reminder, the rail, and the mark-paid so Sandton and Yaba see the same truth.",
        linkedin: "https://www.linkedin.com/in/naledi-mokoena-quittance",
        initials: "NM",
    },
] as const;

export const PRODUCT_SHOTS = [
    {
        src: "/product/inbox.svg",
        title: "Inbox",
        caption:
            "WhatsApp, voice, a photo of a handwritten bill. Quittance drafts the invoice. You send it.",
    },
    {
        src: "/product/collect.svg",
        title: "Collect",
        caption:
            "Paystack, M-Pesa, bank. Chase on the rail the client already uses. Nudge. Mark paid.",
    },
    {
        src: "/product/invoice.png",
        title: "Invoice",
        caption:
            "From & To through Summary on the left. Live preview on the right. The builder the shop already knows.",
    },
    {
        src: "/product/invoices.png",
        title: "Invoices",
        caption:
            "The house ledger — paid, chasing, overdue. Load a note. Keep what the family is owed.",
    },
    {
        src: "/product/template-1.png",
        title: "Template one",
        caption:
            "A clean note for a Lagos trust or a Nairobi ward — number, dates, line items, bank.",
    },
    {
        src: "/product/template-2.png",
        title: "Template two",
        caption:
            "A second face for the same ledger. Accra cloth houses and Joburg steel shops pick the letterhead.",
    },
] as const;

export const PRICING = [
    {
        name: "House",
        price: "Free",
        detail: "One ledger. Inbox drafts. Collect on WhatsApp. For a shop that is still the founder’s name on the door.",
        points: [
            "Inbox — chat, voice, photo to invoice",
            "Collect — nudge and mark paid",
            "Invoice builder + live preview",
            "PDF, JSON, CSV, XLSX, XML",
        ],
    },
    {
        name: "Firm",
        price: "₦48,000 / year",
        detail: "For a workshop, clinic, or cloth house that invoices every week and needs the money to land.",
        points: [
            "Everything in House",
            "Paystack and M-Pesa rails",
            "Scheduled chase",
            "House mark on the note",
        ],
    },
    {
        name: "Corridor",
        price: "Talk to us",
        detail: "For groups that collect across Lagos, Accra, Nairobi, and Joburg — one AI, many currencies.",
        points: [
            "Everything in Firm",
            "Shared Collect board",
            "Corridor currencies",
            "A person who answers",
        ],
    },
] as const;
