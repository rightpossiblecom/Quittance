import Link from "next/link";
import { BRAND, BRAND_LINE, COMPANY, FOOTER_COLUMNS } from "@/lib/marketing/content";

export function MarketingFooter() {
    return (
        <footer className="container py-12">
            <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-5">
                <div className="lg:col-span-1">
                    <p className="text-sm font-semibold tracking-tight">
                        {BRAND}{" "}
                        <span className="quittance-gold text-[10px] tracking-[0.18em] uppercase">
                            AI
                        </span>
                    </p>
                    <p className="text-muted-foreground mt-2 max-w-xs text-sm leading-relaxed">
                        {BRAND_LINE}
                    </p>
                    <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                        {COMPANY.legal}
                        <br />
                        {COMPANY.address}
                    </p>
                </div>
                {FOOTER_COLUMNS.map((column) => (
                    <div key={column.title}>
                        <p className="quittance-gold text-[10px] tracking-[0.18em] uppercase">
                            {column.title}
                        </p>
                        <ul className="mt-3 space-y-2 text-sm">
                            {column.links.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-foreground text-muted-foreground underline-offset-4 hover:underline"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <p className="text-muted-foreground mt-10 border-t border-white/10 pt-6 text-xs">
                © {new Date().getFullYear()} {COMPANY.legal}. {COMPANY.desks}.
                The paper stays with the house.
            </p>
        </footer>
    );
}
