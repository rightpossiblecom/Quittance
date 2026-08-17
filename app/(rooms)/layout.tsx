import { ReactNode } from "react";
import { HouseRail } from "@/components/app/house-rail";

export default function RoomsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-dvh bg-slate-100">
            <div className="pt-4">
                <HouseRail />
            </div>
            {children}
        </div>
    );
}
