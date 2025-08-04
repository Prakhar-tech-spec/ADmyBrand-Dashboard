
'use client';

import { Bell, Command, Mail, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Sidebar } from './sidebar';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-24 items-center justify-between gap-4 bg-background/80 backdrop-blur-sm px-4 md:px-6 lg:px-8">
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full h-11 w-11 bg-card">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col p-0 w-72">
                    <Sidebar />
                </SheetContent>
            </Sheet>
        </div>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search anything..."
          className="w-full rounded-full bg-secondary pl-10 md:w-80 h-11"
        />
        <div className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-muted-foreground text-sm'>
            <Command className='w-4 h-4' />F
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="rounded-full h-11 w-11 bg-card">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full h-11 w-11 bg-card">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Messages</span>
        </Button>
      </div>
    </header>
  );
}
