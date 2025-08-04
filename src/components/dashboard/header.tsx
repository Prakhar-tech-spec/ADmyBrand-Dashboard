
'use client';

import { Bell, Command, Mail, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PayflowLogo } from '../icons/payflow-logo';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-24 items-end justify-between gap-4 bg-background/80 pb-4 backdrop-blur-sm px-4 md:px-6 lg:px-8">
      {/* Logo for mobile/tablet */}
      <div className="flex items-center gap-2 lg:hidden">
        <Link href="#" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <PayflowLogo className="h-8 w-8" />
        </Link>
      </div>

      <div className="hidden lg:flex flex-1" />

      {/* Icons for all screen sizes */}
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
