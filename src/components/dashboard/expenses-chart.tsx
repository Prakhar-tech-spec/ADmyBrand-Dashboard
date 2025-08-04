'use client';

import { TrendingDown } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from 'recharts';

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
} from '@/components/ui/chart';

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
};

export function ExpensesChart() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-medium text-secondary-foreground">Total Expenses</CardTitle>
        <CardDescription>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">$72,421.84</span>
            <span className="flex items-center text-sm font-medium text-highlight-red">
              <TrendingDown className="mr-1 h-4 w-4" />
              -8% vs Prev year
            </span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-40 w-full">
          <BarChart accessibilityLayer data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
            />
            <Tooltip
                cursor={{ fill: 'hsl(var(--accent))', opacity: 0.2, radius: 4 }}
                content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar
              dataKey="expenses"
              fill="hsl(var(--chart-1))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
