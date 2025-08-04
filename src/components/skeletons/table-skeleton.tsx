
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton() {
  return (
    <Card className="shadow-sm rounded-3xl h-full">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24 ml-auto" />
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Skeleton className="w-full h-[400px]" />
        <div className="flex items-center justify-end space-x-2 py-4">
            <Skeleton className="h-9 w-32" />
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-24" />
        </div>
      </CardContent>
    </Card>
  );
}
