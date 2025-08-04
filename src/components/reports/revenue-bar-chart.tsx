
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

const revenueData = [
  { month: 'Jan', revenue: 12000 },
  { month: 'Feb', revenue: 15000 },
  { month: 'Mar', revenue: 13000 },
  { month: 'Apr', revenue: 17000 },
  { month: 'May', revenue: 19000 },
  { month: 'Jun', revenue: 20000 },
];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function RevenueBarChart() {
  return (
    <Card className="shadow-sm rounded-3xl h-full">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground/90">Monthly Revenue</CardTitle>
        <CardDescription>
            A bar chart showing revenue for the last 6 months.
        </CardDescription>
      </CardHeader>
      <CardContent className='h-[25rem]'>
        <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart data={revenueData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={12}
                />
                 <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <Tooltip
                    cursor={{ fill: 'hsl(var(--accent))', opacity: 0.2, radius: 4 }}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar
                  dataKey="revenue"
                  fill="var(--color-revenue)"
                  radius={[4, 4, 0, 0]}
                />
            </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
