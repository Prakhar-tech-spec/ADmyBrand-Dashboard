
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
  ChartContainer,
  ChartTooltipContent,
  ChartConfig
} from '@/components/ui/chart';
import { Button } from '../ui/button';

const chartData = [
  { month: 'Jan', expenses: 9000 },
  { month: 'Feb', expenses: 10000 },
  { month: 'Mar', expenses: 11000 },
  { month: 'Apr', expenses: 12243.33 },
  { month: 'May', expenses: 10500 },
  { month: 'Jun', expenses: 11700 },
];

const chartConfig = {
  expenses: {
    label: 'Expenses',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function ExpensesChart() {
  return (
    <Card className="shadow-sm rounded-3xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle className="text-base font-semibold text-foreground/90">Total Expenses</CardTitle>
            <CardDescription>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">$72,421.84</span>
                    <span className="flex items-center text-sm font-medium text-highlight-red">
                    -8% vs Prev year
                    </span>
                </div>
            </CardDescription>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
            <MoreHorizontal />
        </Button>
      </CardHeader>
      <CardContent className='h-48'>
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
                    cursor={{ fill: 'hsl(var(--accent))', opacity: 0.2, radius: 4 }}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar
                  dataKey="expenses"
                  fill="var(--color-expenses)"
                  radius={[4, 4, 0, 0]}
                />
            </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
