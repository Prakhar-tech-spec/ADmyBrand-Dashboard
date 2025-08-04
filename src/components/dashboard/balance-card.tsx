'use client';

import { ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { USFlagIcon } from '../icons/us-flag';
import { cn } from '@/lib/utils';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export function BalanceCard() {
  return (
    <Card className="shadow-sm rounded-3xl">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base font-semibold text-foreground/90">
            Total Balance
          </CardTitle>
          <Select defaultValue="usd">
            <SelectTrigger className="w-auto bg-card border-none font-semibold">
                <div className="flex items-center gap-2">
                    <USFlagIcon className="h-6 w-6 rounded-full" />
                    <SelectValue />
                </div>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <CardDescription>Available for use</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-4 p-4 rounded-2xl bg-secondary">
            <div className="text-sm text-secondary-foreground">Available Funds</div>
            <div className="text-3xl font-bold text-primary mt-1">$18,248.44</div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Button variant={'outline'} className={cn("w-full h-12 rounded-xl bg-card font-semibold text-secondary-foreground")}>
            <div className="rounded-full bg-secondary p-1 mr-2">
                <ArrowUp className="h-4 w-4" />
            </div>
            Send
          </Button>
          <Button variant="outline" className={cn("w-full h-12 rounded-xl bg-card font-semibold text-secondary-foreground")}>
            <div className="rounded-full bg-secondary p-1 mr-2">
                <ArrowDown className="h-4 w-4" />
            </div>
            Request
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
