
'use client';

import { MoreHorizontal } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Button } from '../ui/button';

const chartData = [
  { month: 'Jan', income: 8000 },
  { month: 'Feb', income: 9500 },
  { month: 'Mar', income: 10000 },
  { month: 'Apr', income: 16343.23 },
  { month: 'May', income: 12000 },
  { month: 'Jun', income: 11000 },
];

const chartConfig = {
  income: {
    label: 'Income',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function IncomeChart() {
  return (
    <Card className="shadow-sm rounded-3xl">
      <CardHeader className='flex flex-row items-center justify-between'>
        <div>
            <CardTitle className="text-base font-semibold text-foreground/90">Total Income</CardTitle>
            <CardDescription>
            <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary">$98,248.44</span>
                <span className="flex items-center text-sm font-medium text-highlight-green">
                +14% vs Prev year
                </span>
            </div>
            </CardDescription>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
            <MoreHorizontal />
        </Button>
      </CardHeader>
      <CardContent className="h-48">
        <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart accessibilityLayer data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 10 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                fontSize={12}
                />
                <Tooltip
                cursor={{ fill: 'hsl(var(--chart-2))', opacity: 0.2, radius: 4 }}
                content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar
                  dataKey="income"
                  fill="var(--color-income)"
                  radius={[4, 4, 0, 0]}
                />
            </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
