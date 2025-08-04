import { ChartSkeleton } from "./chart-skeleton";

export function ReportsSkeleton() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-2">
                    <ChartSkeleton />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2">
                    <ChartSkeleton />
                </div>
                <div>
                    <ChartSkeleton />
                </div>
            </div>
      </>
    )
}
