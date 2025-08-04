
'use client';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 bg-background/80 backdrop-blur-sm px-4 md:px-6 lg:px-8">
      {/* Welcome message */}
      <div className="flex items-center gap-2">
        <span className="font-semibold text-lg text-primary">You're back!</span>
        <span className="text-sm text-muted-foreground">Let’s go.</span>
      </div>
    </header>
  );
}
