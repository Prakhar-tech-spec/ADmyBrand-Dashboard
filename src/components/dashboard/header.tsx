
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bell, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Sidebar } from './sidebar';

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export function Header({
  title = "You're back!",
  subtitle = 'Let’s go.',
}: HeaderProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full bg-card h-12 w-12 lg:hidden">
              <Menu className="h-6 w-6 text-muted-foreground" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
