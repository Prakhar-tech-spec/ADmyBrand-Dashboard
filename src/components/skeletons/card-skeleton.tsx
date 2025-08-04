import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CardSkeleton() {
  return (
    <Card className="shadow-sm rounded-3xl p-2">
        <CardHeader className="pb-4 pt-4 px-4">
            <Skeleton className="h-5 w-2/5" />
            <Skeleton className="h-4 w-4/5" />
        </CardHeader>
        <CardContent className="p-0">
            <Card className='rounded-2xl'>
                <CardContent className='p-6 space-y-2'>
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-8 w-1/2" />
                </CardContent>
            </Card>
      </CardContent>
    </Card>
  );
}
