import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ChartSkeleton() {
  return (
    <Card className="shadow-sm rounded-3xl h-full">
      <CardHeader>
        <Skeleton className="h-5 w-3/5" />
        <Skeleton className="h-4 w-4/5" />
      </CardHeader>
      <CardContent className="h-80">
        <Skeleton className="w-full h-full" />
      </CardContent>
    </Card>
  );
}
