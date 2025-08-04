'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CreditCard,
  History,
  LayoutDashboard,
  LogOut,
  Receipt,
  Settings,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { PayflowLogo } from '../icons/payflow-logo';

const menuItems = [
  { name: 'Dashboard', href: '#', icon: LayoutDashboard },
  { name: 'Cards', href: '#', icon: CreditCard },
  { name: 'Receipts', href: '#', icon: Receipt },
  { name: 'Manage', href: '#', icon: Settings },
  { name: 'History', href: '#', icon: History },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:w-64 flex-col bg-primary text-primary-foreground">
      <div className="flex h-16 flex-shrink-0 items-center px-6">
        <Link href="#" className="flex items-center gap-2 text-xl font-semibold">
          <PayflowLogo className="h-7 w-7" />
          <span>payflow</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-2 px-4 py-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium',
              pathname === item.href
                ? 'bg-accent text-accent-foreground'
                : 'text-gray-300 hover:bg-primary-foreground/10'
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="p-4 space-y-4">
        <Card className="bg-primary-foreground/10 border-accent/50 text-primary-foreground">
            <CardContent className="p-4">
                <p className="text-sm">Complete your profile to unlock all features</p>
                <Progress value={40} className="my-3 h-2 bg-primary-foreground/20" indicatorClassName="bg-accent" />
                <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Verify Identity</Button>
            </CardContent>
        </Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://placehold.co/40x40.png" alt="Robert Doe" data-ai-hint="man portrait"/>
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">Robert Doe</p>
              <p className="text-xs text-gray-400">rob.doe@brisk.com</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary-foreground">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </aside>
  );
}
