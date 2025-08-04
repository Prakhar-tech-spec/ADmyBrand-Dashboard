
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

const channelData = [
  { channel: 'Facebook', clicks: 12320 },
  { channel: 'Google Ads', clicks: 40500 },
  { channel: 'Email', clicks: 15600 },
  { channel: 'Instagram', clicks: 10800 },
  { channel: 'LinkedIn', clicks: 3800 },
  { channel: 'Pinterest', clicks: 3000 },
  { channel: 'Direct', clicks: 1500 },
];

const chartConfig = {
  clicks: {
    label: 'Clicks',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function CampaignChannelChart() {
  return (
    <Card className="shadow-sm rounded-3xl h-full">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground/90">Campaign Performance by Channel</CardTitle>
        <CardDescription>
            A bar chart showing total clicks per marketing channel.
        </CardDescription>
      </CardHeader>
      <CardContent className='h-80'>
        <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart data={channelData} layout="vertical" margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                <YAxis
                    dataKey="channel"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={12}
                    width={80}
                />
                 <XAxis type="number" tickLine={false} axisLine={false} tickMargin={8} />
                <Tooltip
                    cursor={{ fill: 'hsl(var(--accent))', opacity: 0.2, radius: 4 }}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar
                  dataKey="clicks"
                  fill="var(--color-clicks)"
                  radius={[0, 4, 4, 0]}
                  layout="vertical"
                />
            </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
