
'use client';

import { BalanceCard } from '@/components/dashboard/balance-card';
import { NotesCard } from '@/components/dashboard/notes-card';
import { ExpensesChart } from '@/components/dashboard/expenses-chart';
import { IncomeChart } from '@/components/dashboard/income-chart';
import { ExchangeCard } from '@/components/dashboard/exchange-card';
import { ChartContainer } from '@/components/ui/chart';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { GrowthCard } from '@/components/dashboard/growth-card';

export default function DashboardPage() {
  return (
    <DashboardLayout
      title="You're back!"
      subtitle="Let’s go."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <BalanceCard showDropdown={true}/>
            <GrowthCard />
            <GrowthCard title="Conversions" description="vs last month" label="Conversion Rate" value="+2.6%" />
            <BalanceCard title="Users" />
          </div>
        </div>
        <div className="lg:col-span-1">
          <NotesCard />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
        <ExchangeCard />
      </div>
    </DashboardLayout>
  );
}
