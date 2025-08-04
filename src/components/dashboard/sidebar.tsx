
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
  Receipt,
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
  { name: 'Receipts', href: '#', icon: Receipt },
  { name: 'Manage', href: '#', icon: GridIcon },
  { name: 'History', href: '#', icon: History },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:w-72 flex-col bg-primary text-primary-foreground h-full w-full flex">
      <nav className="flex-1 flex flex-col gap-4 px-2 pt-2">
        <Card className="bg-gradient-to-b from-sidebar-card-start to-sidebar-card-end border-none rounded-3xl flex flex-col">
            <div className="flex h-14 flex-shrink-0 items-center justify-between px-4">
                <Link href="#" className="flex items-center gap-2 text-xl font-semibold text-primary-foreground">
                <PayflowLogo className="h-8 w-8" />
                <span className='text-2xl'>payflow</span>
                </Link>
                <Button variant="ghost" size="icon" className='text-primary-foreground/80'>
                    <Menu />
                </Button>
            </div>
          <CardContent className="p-2 pt-0">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-full px-3 py-2.5 text-sm font-medium',
                  index === 0
                    ? 'bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.05)] text-primary-foreground'
                    : 'text-gray-300 hover:text-primary-foreground'
                )}
              >
                <div className={cn(
                    "p-1.5 rounded-full flex items-center justify-center h-10 w-10",
                    index === 0 ? "bg-primary-foreground/20" : "bg-primary-foreground/10"
                )}>
                    <item.icon className="h-5 w-5" />
                </div>
                {item.name}
              </Link>
            ))}
          </CardContent>
        </Card>
        
        <div className="px-1">
            <Button variant={'ghost'} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-300 w-full justify-start h-12 border-dashed border-2 border-primary-foreground/20 hover:text-primary-foreground hover:bg-transparent">
                <div className="p-1.5 rounded-lg bg-primary-foreground/10">
                    <GridIcon className='h-5 w-5' />
                </div>
                Add a section
            </Button>
        </div>
      </nav>
      <div className="mt-auto flex flex-col gap-4 p-2">
        <Card className="bg-card text-card-foreground border-none rounded-3xl">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14">
                <RadialChart progress={40} className="h-full w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">40%</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">Complete profile</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Complete your profile to unlock all features
                </p>
              </div>
            </div>
            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl h-12 font-semibold">
              Verify identity
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-primary-foreground/5 border-none">
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
                    <Button variant="ghost" size="icon" className="text-gray-400 h-8 w-8 hover:text-primary-foreground hover:bg-transparent">
                        <Settings className="h-5 w-5" />
                    </Button>
                </div>
            </CardContent>
        </Card>
      </div>
    </aside>
  );
}
