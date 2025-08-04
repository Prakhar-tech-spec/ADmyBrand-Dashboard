import { BalanceCard } from '@/components/dashboard/balance-card';
import { ContactsCard } from '@/components/dashboard/contacts-card';
import { ExchangeCard } from '@/components/dashboard/exchange-card';
import { ExpensesChart } from '@/components/dashboard/expenses-chart';
import { Header } from '@/components/dashboard/header';
import { IncomeChart } from '@/components/dashboard/income-chart';
import { Sidebar } from '@/components/dashboard/sidebar';
import { TransactionsTable } from '@/components/dashboard/transactions-table';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full bg-background font-sans">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 space-y-6 p-4 md:p-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-12 xl:col-span-3">
              <BalanceCard />
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-5">
              <ContactsCard />
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-4">
              <ExchangeCard />
            </div>
            <div className="col-span-12 xl:col-span-8">
              <TransactionsTable />
            </div>
            <div className="col-span-12 xl:col-span-4 flex flex-col gap-6">
              <ExpensesChart />
              <IncomeChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
