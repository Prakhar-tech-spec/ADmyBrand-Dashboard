import { CardSkeleton } from "./card-skeleton";
import { ChartSkeleton } from "./chart-skeleton";

export function DashboardSkeleton() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
                </div>
                <div className="lg:col-span-1">
                    <CardSkeleton />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <ChartSkeleton />
                <ChartSkeleton />
                <ChartSkeleton />
            </div>
        </>
    )
}
