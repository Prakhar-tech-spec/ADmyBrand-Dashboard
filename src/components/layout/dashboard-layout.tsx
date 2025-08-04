
'use client';

import {
  LayoutDashboard,
  CreditCard,
  Receipt,
  Settings,
  History,
} from 'lucide-react';

import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import FloatingActionMenu from '@/components/ui/floating-action-menu';
import { SidebarProvider } from '@/components/ui/sidebar';

const menuItems = [
  { name: 'Dashboard', href: '#', icon: <LayoutDashboard className="w-4 h-4" /> },
  { name: 'Cards', href: '#', icon: <CreditCard className="w-4 h-4" /> },
  { name: 'Receipts', href: '#', icon: <Receipt className="w-4 h-4" /> },
  { name: 'Manage', href: '#', icon: <Settings className="w-4 h-4" /> },
  { name: 'History', href: '#', icon: <History className="w-4 h-4" /> },
];

type DashboardLayoutProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

export default function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen w-full bg-background lg:bg-primary font-sans">
      <SidebarProvider>
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex flex-1 flex-col bg-background lg:rounded-3xl overflow-auto lg:m-4">
              <Header title={title} subtitle={subtitle} />
              <main className="flex-1 space-y-4 p-4 md:p-6 lg:p-8">
                {children}
              </main>
          </div>
        </div>
        <div className="lg:hidden">
          <FloatingActionMenu
            options={menuItems.map(item => ({
              label: item.name,
              Icon: item.icon,
              onClick: () => {
                console.log(`${item.name} clicked`);
              },
            }))}
          />
        </div>
      </SidebarProvider>
    </div>
  );
}
