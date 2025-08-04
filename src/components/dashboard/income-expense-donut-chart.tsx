
'use client';

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartConfig = {
  income: {
    label: 'Income',
    color: '#00C48C',
  },
  expenses: {
    label: 'Expenses',
    color: '#FE5B5B',
  },
} satisfies ChartConfig;

type IncomeExpenseDonutChartProps = {
  income: number;
  expenses: number;
};

export function IncomeExpenseDonutChart({ income, expenses }: IncomeExpenseDonutChartProps) {
  const chartData = [
    { name: 'Income', value: income, fill: chartConfig.income.color },
    { name: 'Expenses', value: expenses, fill: chartConfig.expenses.color },
  ];

  return (
    <Card className="h-full shadow-sm rounded-3xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold text-foreground/90">
          Income vs. Expenses
        </CardTitle>
        <CardDescription>
            A breakdown of your financial activity.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-64 sm:h-48">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <div className="relative w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <Tooltip
                    cursor={{ fill: 'hsl(var(--accent))', opacity: 0.2 }}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    cornerRadius={8}
                >
                    {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex items-center text-sm">
                    <span className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: chartConfig.income.color }}></span>
                    Income
                </div>
                <div className="flex items-center text-sm">
                    <span className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: chartConfig.expenses.color }}></span>
                    Expenses
                </div>
            </div>
          </div>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
