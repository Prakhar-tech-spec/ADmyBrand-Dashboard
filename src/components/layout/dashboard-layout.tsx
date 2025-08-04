
'use client';

import React, { useState, useEffect } from 'react';
import { LayoutDashboard, CreditCard, Receipt, Settings, History } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import FloatingActionMenu from '@/components/ui/floating-action-menu';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSkeleton } from '@/components/skeletons/dashboard-skeleton';
import { ReportsSkeleton } from '@/components/skeletons/reports-skeleton';

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
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 150); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [pathname]);

  const getSkeleton = () => {
    if (pathname === '/reports') {
      return <ReportsSkeleton />;
    }
    // Default to dashboard skeleton for root and other pages
    return <DashboardSkeleton />;
  };

  return (
    <div className="flex h-screen w-full bg-background lg:bg-primary font-sans">
      <SidebarProvider>
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex flex-1 flex-col bg-background lg:rounded-3xl overflow-auto lg:m-4">
            <Header title={title} subtitle={subtitle} />
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="flex-1 space-y-4 p-4 md:p-6 lg:p-8"
                >
                  {getSkeleton()}
                </motion.div>
              ) : (
                <motion.main
                  key={pathname}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="flex-1 space-y-4 p-4 md:p-6 lg:p-8"
                >
                  {children}
                </motion.main>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="lg:hidden">
          <FloatingActionMenu
            options={menuItems.map((item) => ({
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
