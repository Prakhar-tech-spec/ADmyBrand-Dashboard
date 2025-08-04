
'use client';

import { BalanceCard } from '@/components/dashboard/balance-card';
import { ContactsCard } from '@/components/dashboard/contacts-card';
import { ExchangeCard } from '@/components/dashboard/exchange-card';
import { ExpensesChart } from '@/components/dashboard/expenses-chart';
import { IncomeChart } from '@/components/dashboard/income-chart';
import { TransactionsTable } from '@/components/dashboard/transactions-table';
import { Button } from '@/components/ui/button';
import { GridIcon } from '@/components/icons/grid-icon';
import { cn } from '@/lib/utils';
import { ChartContainer } from '@/components/ui/chart';
import DashboardLayout from '@/components/layout/dashboard-layout';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-4">
          <div className="space-y-6">
            <BalanceCard />
            <ContactsCard />
            <Button
              variant="outline"
              className={cn(
                'w-full h-14 rounded-2xl bg-card font-semibold text-secondary-foreground'
              )}
            >
              <GridIcon className="mr-2" />
              Add or Manage widgets
            </Button>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-8">
          <TransactionsTable />
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </DashboardLayout>
  );
}
