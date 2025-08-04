
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

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

      <Button variant="ghost" size="icon" className="text-muted-foreground">
        <Bell className="h-6 w-6" />
        <span className="sr-only">Notifications</span>
      </Button>
    </header>
  );
}
