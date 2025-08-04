
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CreditCard,
  History,
  Home,
  LogOut,
  User,
  Settings,
  Plus,
  Menu,
  ChevronDown,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { PayflowLogo } from '../icons/payflow-logo';
import { GridIcon } from '../icons/grid-icon';
import { RadialChart } from '../icons/radial-chart';

const menuItems = [
  { name: 'Dashboard', href: '#', icon: Home },
  { name: 'Cards', href: '#', icon: CreditCard },
  { name: 'Receipts', href: '#', icon: User },
  { name: 'Manage', href: '#', icon: GridIcon },
  { name: 'History', href: '#', icon: History },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:w-64 flex-col bg-primary text-primary-foreground p-4 h-full w-full flex">
      <div className="flex h-16 flex-shrink-0 items-center justify-between px-2">
        <Link href="#" className="flex items-center gap-2 text-xl font-semibold text-primary-foreground">
          <PayflowLogo className="h-8 w-8" />
          <span className='text-2xl'>payflow</span>
        </Link>
        <Button variant="ghost" size="icon" className='text-primary-foreground/80'>
            <Menu />
        </Button>
      </div>
      <nav className="flex-1 space-y-2 py-4">
        {menuItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium',
              index === 0
                ? 'bg-primary-foreground/10 text-primary-foreground'
                : 'text-gray-300 hover:bg-primary-foreground/10'
            )}
          >
            <div className={cn(
                "p-1.5 rounded-full flex items-center justify-center h-8 w-8",
                index === 0 ? "bg-primary-foreground/20" : "bg-primary-foreground/10"
            )}>
                <item.icon className="h-5 w-5" />
            </div>
            {item.name}
          </Link>
        ))}
        <Button variant={'ghost'} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-300 hover:bg-primary-foreground/10 w-full justify-start mt-4! h-12 border-dashed border-2 border-primary-foreground/20">
            <div className="p-1.5 rounded-lg bg-primary-foreground/10">
                <GridIcon className='h-5 w-5' />
            </div>
            Add a section
        </Button>
      </nav>
      <Card className="bg-primary-foreground/5 border-none mt-auto">
        <CardContent className="p-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                    <AvatarImage src="https://placehold.co/40x40.png" alt="Robert Doe" data-ai-hint="man portrait"/>
                    <AvatarFallback>RD</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                        <span className='font-semibold text-sm'>Robert Doe</span>
                        <span className='text-xs text-primary-foreground/60'>robertdoe@email.com</span>
                    </div>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary-foreground h-8 w-8">
                    <ChevronDown className="h-5 w-5" />
                </Button>
            </div>
        </CardContent>
      </Card>
    </aside>
  );
}
