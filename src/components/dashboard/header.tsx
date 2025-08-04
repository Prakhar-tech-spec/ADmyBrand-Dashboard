
'use client';

import Link from 'next/link';
import { PayflowLogo } from '../icons/payflow-logo';

export function Header() {
  return (
    <header className="flex h-24 items-center justify-between px-4 md:px-6 lg:px-8">
      {/* Mobile and Tablet view */}
      <div className="flex items-center gap-2 lg:hidden">
        <Link href="#" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <PayflowLogo className="h-8 w-8" />
          <span className="text-2xl">payflow</span>
        </Link>
      </div>

      {/* Laptop view */}
      <div className="hidden lg:flex flex-col">
        <span className="text-2xl font-semibold text-primary">You're back!</span>
        <span className="text-base text-muted-foreground">Let’s go.</span>
      </div>
    </header>
  );
}
