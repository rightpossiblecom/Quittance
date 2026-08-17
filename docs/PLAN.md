# Quittance — plan

Source: [al1abb/invoify](https://github.com/al1abb/invoify). Live app: [invoify.vercel.app](https://invoify.vercel.app).

## 1. Brand

Three names considered:

1. **Quittance** — locked. A quittance is the written discharge of a debt. The paper that says the house was paid. Adult, institutional, Google-readable once the one-liner is on the page.
2. Ledgerwell — clear, bank-like, a little generic.
3. Iroko Note — the African teak; longevity. Strong, less precise about invoices.

**One line:** Quittance is the AI that writes the invoice and collects the money — African firms, WhatsApp to Paystack to the family ledger.

## 2. What `/` is now vs what it should be

`/` (via `/en`) is the invoice builder. No marketing landing exists in the repo or on the live site.

- Move the builder to **`/invoice`** (their word).
- Saved ledgers become **`/invoices`** (their Load Invoice list, as a room).
- `/` becomes marketing in their look: slate-100 field, Outfit, shadcn cards, dark primary, wizard-step rhythm.

## 3. Landing clone (their layout language, our copy)

Their public site *is* the builder. We keep that chrome and write a house story on top.

| Section | Their shape | Our words |
| --- | --- | --- |
| Hero | Card header energy, tight headline, dark button, framed invoice preview | Write the paper. Keep the wealth in the house. |
| Corridor strip | Logo / city row | Lagos joiners, Accra cloth houses, Nairobi wards, Joburg firms |
| How it works | Their 5 wizard steps | From & To → Details → Line items → Payment → Summary |
| Builder feature | Form + live preview split | Same UI language, wealth copy |
| Ledger feature | Saved-invoice cards | The house ledger — what the family is owed |
| Pricing | 3 quiet tiers | House / Firm / Corridor |
| FAQ | Tight Qs | Paper, PDF, who it is for |
| CTA | Full-width generate-bar energy | Open an account. Issue the first note. |

No leftover “Invoify”, Ali Abbasov, Buy Me a Coffee, or “free open-source invoice generator” voice on the public site.

## 4. Every page in the marketing header and footer

Header and footer list **every** public page: Product, Team, **Inbox**, **Collect**, **Invoice**, **Invoices**, Pricing, About, Contact, plus Log in / Sign up. Privacy and Terms live in the footer. A visitor on `/team` can open Inbox and Collect from the same menu.

- `/inbox` — mocked WhatsApp / voice / photo intake. Turn into invoice (delay, no model).
- `/collect` — mocked rails (Paystack, M-Pesa, bank, WhatsApp). Nudge / mark paid.

- `/product` — Quittance intro, ≥4 screenshots of this UI, how it works, CTA to Sign up.
- `/team` — ≥2 people (Adanna Okonkwo, Kwame Boateng, Naledi Mokoena), roles, bios, LinkedIn, photos.

## 5. Login / signup

New routes. Email + password. Any pair works. Short loading state. Cross-links.

After login or signup → **`/invoice`**. Session is `localStorage` (`quittance:session`). Logout clears it and returns to `/login`.

## 6. In-app home and screens we keep

| Route | Job |
| --- | --- |
| `/invoice` | In-app home. Their builder. Do not redesign. |
| `/invoices` | Their saved-invoice cards. Seed them. |
| `/template/[id]` | Their PDF template preview (dev / print path). |

Do not rewrite the wizard, live preview, action card, or invoice templates.

## 7. What we mock

- Auth: any email + password. No Clerk, no NextAuth, no OAuth.
- Saved invoices: six fixture notes (Lagos / Accra / Nairobi / Joburg / Kigali / Cairo). No empty state on the camera path.
- Form defaults: a filled Lagos joinery invoice so the builder is never blank.
- Generate PDF: on `DEMO_MODE=1` or `VERCEL=1`, return a canned PDF after a short delay. Locally, try their Puppeteer path first.
- Email send: succeed after a delay when Nodemailer keys are missing. No Gmail.

One live-looking click: **Generate PDF** returns a completed document after a short delay.

## 8. What we delete / stub so Vercel builds

- Treat `DEMO_MODE=1` or `VERCEL=1` as demo.
- Missing `NODEMAILER_EMAIL` / `NODEMAILER_PW` does not crash.
- No Docker. Delete Dependabot. No GitHub Actions in this repo.
- Puppeteer is not required on the host.
- **pnpm only.** No npm / yarn / bun. `package-lock.json` is gone. `pnpm install` / `pnpm dev` / `pnpm build`.

## 9. Product-page media

- Upstream shots already in the clone: `invoify-web-app.png`, `invoice-1-example.png`, `invoice-2-example.png`.
- Copy into `public/product/` with clean names, plus captures from the local invoice and invoices rooms after the demo pass.
