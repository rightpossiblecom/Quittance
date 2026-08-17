import { MarketingFooter } from "./footer";
import { MarketingHeader } from "./header";

export function MarketingPageFrame({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="quittance-market flex min-h-dvh flex-col">
            <div className="pt-4">
                <MarketingHeader />
            </div>
            <div className="flex-1">{children}</div>
            <MarketingFooter />
        </div>
    );
}
