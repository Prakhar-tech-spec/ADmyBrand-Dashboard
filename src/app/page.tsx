
'use client';

import { BalanceCard } from '@/components/dashboard/balance-card';
import { ContactsCard } from '@/components/dashboard/contacts-card';
import { ExchangeCard } from '@/components/dashboard/exchange-card';
import { ExpensesChart } from '@/components/dashboard/expenses-chart';
import { IncomeChart } from '@/components/dashboard/income-chart';
import { NotesCard } from '@/components/dashboard/notes-card';
import { Button } from '@/components/ui/button';
import { GridIcon } from '@/components/icons/grid-icon';
import { cn } from '@/lib/utils';
import { ChartContainer } from '@/components/ui/chart';
import DashboardLayout from '@/components/layout/dashboard-layout';

export default function DashboardPage() {
  return (
    <DashboardLayout
      title="You're back!"
      subtitle="Let’s go."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <BalanceCard />
            <ContactsCard />
            <BalanceCard title="Conversions" />
            <ContactsCard />
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
