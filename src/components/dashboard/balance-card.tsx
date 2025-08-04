'use client';

import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { USFlagIcon } from '../icons/us-flag';

export function BalanceCard() {
  return (
    <Card className="h-full shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium text-secondary-foreground">
            Total Balance
          </CardTitle>
          <div className="flex items-center gap-2">
            <USFlagIcon className="h-6 w-6 rounded-full" />
            <span className="text-sm font-medium">USD</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-primary">$18,248.44</div>
        <div className="mt-6 flex items-center gap-2">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <ArrowUpRight className="mr-2 h-4 w-4" />
            Send
          </Button>
          <Button variant="secondary" className="w-full">
            <ArrowDownLeft className="mr-2 h-4 w-4" />
            Request
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
