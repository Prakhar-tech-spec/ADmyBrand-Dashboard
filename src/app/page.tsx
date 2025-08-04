'use client';

import {
  LayoutDashboard,
  CreditCard,
  Receipt,
  Settings,
  History,
  Menu,
} from 'lucide-react';

import { BalanceCard } from '@/components/dashboard/balance-card';
import { ContactsCard } from '@/components/dashboard/contacts-card';
import { ExchangeCard } from '@/components/dashboard/exchange-card';
import { ExpensesChart } from '@/components/dashboard/expenses-chart';
import { Header } from '@/components/dashboard/header';
import { IncomeChart } from '@/components/dashboard/income-chart';
import { Sidebar } from '@/components/dashboard/sidebar';
import { TransactionsTable } from '@/components/dashboard/transactions-table';
import { Button } from '@/components/ui/button';
import { GridIcon } from '@/components/icons/grid-icon';
import { cn } from '@/lib/utils';
import { ChartContainer } from '@/components/ui/chart';
import FloatingActionMenu from '@/components/ui/floating-action-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { SidebarProvider } from '@/components/ui/sidebar';

const menuItems = [
  { name: 'Dashboard', href: '#', icon: <LayoutDashboard className="w-4 h-4" /> },
  { name: 'Cards', href: '#', icon: <CreditCard className="w-4 h-4" /> },
  { name: 'Receipts', href: '#', icon: <Receipt className="w-4 h-4" /> },
  { name: 'Manage', href: '#', icon: <Settings className="w-4 h-4" /> },
  { name: 'History', href: '#', icon: <History className="w-4 h-4" /> },
];


export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full bg-primary font-sans">
      <SidebarProvider>
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="flex flex-1 flex-col lg:p-2 pt-4 lg:pt-2 overflow-hidden">
          <div className="flex flex-1 flex-col bg-background lg:rounded-3xl overflow-auto">
              <Header />
              <main className="flex-1 space-y-4 p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 xl:col-span-4">
                  <div className="space-y-6">
                      <BalanceCard />
                      <ContactsCard />
                      <Button variant="outline" className={cn("w-full h-14 rounded-2xl bg-card font-semibold text-secondary-foreground")}>
                          <GridIcon className="mr-2" />
                          Add or Manage widgets
                      </Button>
                  </div>
                  </div>
                  <div className="col-span-12 xl:col-span-8">
                  <TransactionsTable />
                  </div>

                  <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ChartContainer config={{
                      expenses: {
                        label: 'Expenses',
                        color: 'hsl(var(--chart-1))',
                      },
                    }}>
                      <ExpensesChart />
                    </ChartContainer>
                    <ChartContainer config={{
                      income: {
                        label: 'Income',
                        color: 'hsl(var(--chart-2))',
                      },
                    }}>
                      <IncomeChart />
                    </ChartContainer>
                    <ExchangeCard />
                  </div>
              </div>
              </main>
          </div>
        </div>
        <div className="lg:hidden">
          <FloatingActionMenu
            options={menuItems.map(item => ({
              label: item.name,
              Icon: item.icon,
              onClick: () => {
                // You can add navigation logic here, e.g., router.push(item.href)
                console.log(`${item.name} clicked`);
              },
            }))}
          />
        </div>
      </SidebarProvider>
    </div>
  );
}
