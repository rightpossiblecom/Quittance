import Link from "next/link";
import { BRAND, BRAND_LINE, MARKETING_FOOTER_LEGAL, MARKETING_NAV } from "@/lib/marketing/content";

export function MarketingFooter() {
    return (
        <footer className="container py-10">
            <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-start md:justify-between">
                <div>
                    <p className="text-sm font-semibold tracking-tight">
                        {BRAND}{" "}
                        <span className="quittance-gold text-[10px] tracking-[0.18em] uppercase">
                            AI
                        </span>
                    </p>
                    <p className="text-muted-foreground mt-2 max-w-sm text-sm leading-relaxed">
                        {BRAND_LINE}
                    </p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {MARKETING_NAV.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-foreground text-muted-foreground underline-offset-4 hover:underline"
                        >
                            {item.label}
                        </Link>
                    ))}
                    {MARKETING_FOOTER_LEGAL.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-foreground text-muted-foreground underline-offset-4 hover:underline"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/login"
                        className="hover:text-foreground text-muted-foreground underline-offset-4 hover:underline"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/signup"
                        className="hover:text-foreground text-muted-foreground underline-offset-4 hover:underline"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </footer>
    );
}
