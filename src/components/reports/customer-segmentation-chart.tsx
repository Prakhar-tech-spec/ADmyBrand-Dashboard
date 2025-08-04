
'use client';

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

const customerData = [
  { status: 'Active', count: 7, color: 'hsl(var(--chart-2))' },
  { status: 'Inactive', count: 3, color: 'hsl(var(--chart-5))'  },
];

const chartConfig = {
    active: { label: 'Active', color: 'hsl(var(--chart-2))' },
    inactive: { label: 'Inactive', color: 'hsl(var(--chart-5))' },
} satisfies ChartConfig;

const CustomLegend = () => {
    return (
        <div className="flex justify-center gap-4 mt-4">
            {customerData.map((entry) => (
                <div key={entry.status} className="flex items-center text-sm">
                    <span className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
                    {entry.status}
                </div>
            ))}
        </div>
    );
};


export function CustomerSegmentationChart() {
  return (
    <Card className="shadow-sm rounded-3xl h-full">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground/90">Customer Segmentation</CardTitle>
        <CardDescription>
            Distribution of customers by status.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[25rem] flex flex-col justify-center">
        <ChartContainer config={chartConfig} className="w-full h-full aspect-square">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                cursor={{ fill: 'hsl(var(--accent))', opacity: 0.2 }}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={customerData}
                dataKey="count"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={70}
                paddingAngle={5}
                cornerRadius={8}
              >
                {customerData.map((entry) => (
                  <Cell key={`cell-${entry.status}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <CustomLegend />
      </CardContent>
    </Card>
  );
}
