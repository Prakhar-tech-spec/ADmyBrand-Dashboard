
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bell, Menu, Home, FileText, Table, Users, ShieldAlert } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Sidebar } from './sidebar';

const menuItems = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Reports', href: '/reports', icon: FileText },
    { name: 'Campaign Performance', href: '/campaignperformance', icon: Table },
    { name: 'Customers', href: '/customers', icon: Users },
    { name: 'Alerts & Logs', href: '/alerts', icon: ShieldAlert },
];

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export function Header({
  title = "You're back!",
  subtitle = 'Let’s go.',
}: HeaderProps) {

  return (
    <header className="flex h-24 items-center justify-between px-4 md:px-6 lg:px-8 pt-8">
      {/* Mobile and Tablet view */}
      <div className="flex items-center gap-2 lg:hidden">
        <Link href="#" className="flex items-center text-xl font-semibold text-primary">
          <span className="text-2xl">ADmyBRAND</span>
        </Link>
      </div>

      {/* Laptop view */}
      <div className="hidden lg:flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-primary">{title}</span>
        <span className="text-base text-muted-foreground">{subtitle}</span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="rounded-full bg-card h-12 w-12">
          <Bell className="h-6 w-6 text-muted-foreground" />
          <span className="sr-only">Notifications</span>
        </Button>
        <div className="lg:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-card h-12 w-12">
                        <Menu className="h-6 w-6 text-muted-foreground" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {menuItems.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                            <Link href={item.href} className="flex items-center gap-2">
                                <item.icon className="h-4 w-4" />
                                <span>{item.name}</span>
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
