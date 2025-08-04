
'use client';

import { Bell, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-24 items-end justify-between gap-4 bg-background/80 pb-4 backdrop-blur-sm px-4 md:px-6 lg:px-8">
      {/* Welcome message for mobile/tablet */}
      <div className="flex items-center gap-2 lg:hidden">
        <div className="flex flex-col">
          <span className="font-semibold text-lg text-primary">You're back!</span>
          <span className="text-sm text-muted-foreground">Let’s go.</span>
        </div>
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
