

'use client';

import { motion } from 'framer-motion';
import { BalanceCard } from '@/components/dashboard/balance-card';
import { NotesCard } from '@/components/dashboard/notes-card';
import { ExpensesChart } from '@/components/dashboard/expenses-chart';
import { IncomeChart } from '@/components/dashboard/income-chart';
import { IncomeExpenseDonutChart } from '@/components/dashboard/income-expense-donut-chart';
import { ChartContainer } from '@/components/ui/chart';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { GrowthCard } from '@/components/dashboard/growth-card';

export default function DashboardPage() {
  const totalIncome = 98248.44;
  const totalExpenses = 72421.84;

  return (
    <DashboardLayout
      title="You're back!"
      subtitle="Let’s go."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <BalanceCard showDropdown={true}/>
            <GrowthCard />
            <GrowthCard title="Conversions" description="vs last month" label="Conversion Rate" value="+2.6%" />
            <BalanceCard title="Users" value="1,354" label="Active Users" />
        </div>
        <div className="lg:col-span-1">
          <NotesCard />
        </div>
        <div className="md:col-span-1">
          <ChartContainer
            config={{
              expenses: {
                label: 'Expenses',
                color: 'hsl(var(--chart-1))',
              },
            }}
          >
            <ExpensesChart />
          </ChartContainer>
        </div>
        <div className="md:col-span-1">
          <ChartContainer
            config={{
              income: {
                label: 'Income',
                color: 'hsl(var(--chart-2))',
              },
            }}
          >
            <IncomeChart />
          </ChartContainer>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <IncomeExpenseDonutChart income={totalIncome} expenses={totalExpenses} />
        </div>
      </div>
    </DashboardLayout>
  );
}
