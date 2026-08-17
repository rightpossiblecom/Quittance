import { MarketingPageFrame } from "./page-frame";

export function LegalPage({
    eyebrow,
    title,
    lede,
    updated,
    children,
}: {
    eyebrow: string;
    title: string;
    lede?: string;
    updated: string;
    children: React.ReactNode;
}) {
    return (
        <MarketingPageFrame>
            <main className="py-10 lg:container">
                <p className="quittance-gold text-xs tracking-[0.2em] uppercase">
                    {eyebrow}
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                    {title}
                </h1>
                {lede ? (
                    <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
                        {lede}
                    </p>
                ) : null}
                <p className="text-muted-foreground mt-3 text-xs">
                    Last updated {updated}
                </p>
                <div className="text-muted-foreground mt-8 max-w-2xl space-y-8 text-base leading-relaxed">
                    {children}
                </div>
            </main>
        </MarketingPageFrame>
    );
}

export function LegalSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section>
            <h2 className="text-foreground text-lg font-semibold tracking-tight">
                {title}
            </h2>
            <div className="mt-2 space-y-3">{children}</div>
        </section>
    );
}
