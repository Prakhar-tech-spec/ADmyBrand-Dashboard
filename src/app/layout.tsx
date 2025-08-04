
'use client'

import './globals.css';
import { useRef } from 'react';
import Toaster, { ToasterRef } from '@/components/ui/toast';
import { ToasterContext } from '@/context/toaster-context';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const toasterRef = useRef<ToasterRef>(null);
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased h-full">
        <ToasterContext.Provider value={{ toasterRef }}>
            {children}
        </ToasterContext.Provider>
        <Toaster ref={toasterRef} />
      </body>
    </html>
  );
}
