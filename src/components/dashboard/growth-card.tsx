
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowUp } from 'lucide-react';

export function GrowthCard() {
  return (
    <Card className="shadow-sm rounded-3xl bg-gradient-to-b from-balance-card-shiny-start to-balance-card-shiny-end text-primary-foreground border-none p-2">
      <CardHeader className="pb-4 pt-4 px-4">
        <div className="flex items-start justify-between">
            <div>
                <CardTitle className="text-base font-semibold text-primary-foreground">
                    Growth
                </CardTitle>
                <CardDescription className='text-primary-foreground/70'>vs last month</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Card className='rounded-2xl'>
            <CardContent className='p-6'>
                <div className="text-sm text-secondary-foreground">Monthly Growth</div>
                <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-primary mt-1 font-numbers">
                        +15.2%
                    </div>
                    <ArrowUp className="w-5 h-5 text-highlight-green" />
                </div>
            </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
