
'use client';

import { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  generateForecast,
  GenerateForecastOutput,
} from '@/ai/flows/generate-forecast-flow';
import { Campaign } from '@/components/datatable/columns';
import { Customer } from '@/components/customers/columns';
import { Alert } from '@/components/alerts/columns';

type ForecastCardProps = {
  campaigns: Campaign[];
  customers: Customer[];
  alerts: Alert[];
};

export function ForecastCard({
  campaigns,
  customers,
  alerts,
}: ForecastCardProps) {
  const [forecast, setForecast] = useState<GenerateForecastOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateForecast = async () => {
    setIsLoading(true);
    setForecast(null);
    try {
      const result = await generateForecast({
        campaigns,
        customers,
        alerts,
      });
      setForecast(result);
    } catch (error) {
      console.error('Error generating forecast:', error);
      // You could set an error state here and display it in the UI
    }
    setIsLoading(false);
  };

  return (
    <Card className="shadow-sm rounded-3xl h-full flex flex-col">
      <CardHeader>
        <CardTitle>Forecast</CardTitle>
        <CardDescription>
          AI-powered forecast based on your data
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center text-center">
        {isLoading ? (
          <div className="space-y-3 w-full">
            <Skeleton className="h-4 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
            <Skeleton className="h-4 w-2/3 mx-auto" />
          </div>
        ) : forecast ? (
          <div className="text-sm text-muted-foreground">
            <h4 className="font-semibold text-foreground">
              {forecast.title}
            </h4>
            <p className="mt-2">{forecast.summary}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">
              Click the button to generate a forecast.
            </p>
            <Button onClick={handleGenerateForecast}>
              <Wand2 className="mr-2 h-4 w-4" />
              Generate Forecast
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground text-center w-full">
            *AI can make mistakes. It&apos;s in Beta version.
        </p>
      </CardFooter>
    </Card>
  );
}
