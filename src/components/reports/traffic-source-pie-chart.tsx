
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

const trafficData = [
  { name: 'Organic', value: 400, color: 'hsl(var(--chart-1))' },
  { name: 'Social', value: 300, color: 'hsl(var(--chart-2))'  },
  { name: 'Referral', value: 200, color: 'hsl(var(--chart-3))'  },
  { name: 'Direct', value: 100, color: 'hsl(var(--chart-4))'  },
];

const chartConfig = {
    organic: { label: 'Organic', color: 'hsl(var(--chart-1))' },
    social: { label: 'Social', color: 'hsl(var(--chart-2))' },
    referral: { label: 'Referral', color: 'hsl(var(--chart-3))' },
    direct: { label: 'Direct', color: 'hsl(var(--chart-4))' },
} satisfies ChartConfig;

const CustomLegend = () => {
    return (
        <div className="flex justify-center gap-4 mt-4">
            {trafficData.map((entry) => (
                <div key={entry.name} className="flex items-center text-sm">
                    <span className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
                    {entry.name}
                </div>
            ))}
        </div>
    );
};


export function TrafficSourcePieChart() {
  return (
    <Card className="shadow-sm rounded-3xl h-full">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground/90">Traffic Sources</CardTitle>
        <CardDescription>
            Distribution of traffic sources.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[22rem] flex flex-col justify-center">
        <ChartContainer config={chartConfig} className="w-full h-full aspect-square">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                cursor={{ fill: 'hsl(var(--accent))', opacity: 0.2 }}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={trafficData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={70}
                paddingAngle={5}
                cornerRadius={8}
              >
                {trafficData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.color} />
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
