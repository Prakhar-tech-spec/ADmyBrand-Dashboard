'use client';

import { TrendingUp } from 'lucide-react';
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
  { month: 'Jan', income: 8000 },
  { month: 'Feb', income: 9500 },
  { month: 'Mar', income: 10000 },
  { month: 'Apr', income: 16343.23 },
  { month:- 'May', income: 12000 },
  { month: 'Jun', income: 11000 },
];

const chartConfig = {
  income: {
    label: 'Income',
    color: 'hsl(var(--chart-2))',
  },
};

export function IncomeChart() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-medium text-secondary-foreground">Total Income</CardTitle>
        <CardDescription>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">$98,248.44</span>
            <span className="flex items-center text-sm font-medium text-highlight-green">
              <TrendingUp className="mr-1 h-4 w-4" />
              +14% vs Prev year
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
              cursor={{ fill: 'hsl(var(--chart-2))', opacity: 0.2, radius: 4 }}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar
              dataKey="income"
              fill="hsl(var(--chart-2))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
