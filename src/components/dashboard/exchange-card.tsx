'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { USFlagIcon } from '../icons/us-flag';
import { EUFlagIcon } from '../icons/eu-flag';

export function ExchangeCard() {
  return (
    <Card className="h-full shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-medium text-secondary-foreground">
          Exchange
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between rounded-lg bg-secondary p-3">
          <div className="flex items-center gap-2">
            <USFlagIcon className="h-8 w-8 rounded-full" />
            <div>
              <div className="text-sm text-muted-foreground">From</div>
              <div className="font-semibold">USD</div>
            </div>
          </div>
          <div className="text-lg font-bold">300.00</div>
        </div>
        <div className="my-2 flex items-center justify-center">
            <div className="p-1 rounded-full bg-background border">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </div>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-secondary p-3">
          <div className="flex items-center gap-2">
            <EUFlagIcon className="h-8 w-8 rounded-full" />
            <div>
              <div className="text-sm text-muted-foreground">To</div>
              <div className="font-semibold">EUR</div>
            </div>
          </div>
          <div className="text-lg font-bold">275.68</div>
        </div>
        <div className="mt-4 space-y-1 text-sm">
            <p className="text-muted-foreground">1.00 USD = 0.92 Euro</p>
            <p className="text-muted-foreground">Exchange fee: <span className="font-medium text-foreground">$12.44</span></p>
        </div>
        <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Exchange
        </Button>
      </CardContent>
    </Card>
  );
}
