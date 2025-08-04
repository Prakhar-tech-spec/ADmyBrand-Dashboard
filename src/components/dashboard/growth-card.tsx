
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowUp } from 'lucide-react';

type GrowthCardProps = {
    title?: string;
    description?: string;
    label?: string;
    value?: string;
};

export function GrowthCard({ title = "Growth", description = "vs last month", label = "Monthly Growth", value = "+15.2%" }: GrowthCardProps) {
  return (
    <Card className="shadow-sm rounded-3xl bg-gradient-to-b from-balance-card-shiny-start to-balance-card-shiny-end text-primary-foreground border-none p-2">
      <CardHeader className="pb-4 pt-4 px-4">
        <div className="flex items-start justify-between">
            <div>
                <CardTitle className="text-base font-semibold text-primary-foreground">
                    {title}
                </CardTitle>
                <CardDescription className='text-primary-foreground/70'>{description}</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Card className='rounded-2xl'>
            <CardContent className='p-6'>
                <div className="text-sm text-secondary-foreground">{label}</div>
                <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-primary mt-1 font-numbers">
                        {value}
                    </div>
                    <ArrowUp className="w-5 h-5 text-highlight-green" />
                </div>
            </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
