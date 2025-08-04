'use client';

import { ArrowRight, MoreHorizontal, Repeat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { USFlagIcon } from '../icons/us-flag';
import { EUFlagIcon } from '../icons/eu-flag';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '../ui/input';

export function ExchangeCard() {
  return (
    <Card className="h-full shadow-sm rounded-3xl">
      <CardHeader className="pb-4 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold text-foreground/90">
          Exchange
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
            <MoreHorizontal />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 relative">
            <div className="flex items-center justify-between rounded-lg bg-secondary p-3">
                <Select defaultValue="usd">
                    <SelectTrigger className="w-auto bg-transparent border-none font-semibold p-0 h-auto">
                        <div className="flex items-center gap-2">
                            <USFlagIcon className="h-8 w-8 rounded-full" />
                            <SelectValue />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="eur">EUR</SelectItem>
                    </SelectContent>
                </Select>
                <Input type='number' defaultValue={300} className="text-lg font-bold bg-transparent border-none text-right w-24"/>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-secondary p-3">
                 <Select defaultValue="eur">
                    <SelectTrigger className="w-auto bg-transparent border-none font-semibold p-0 h-auto">
                        <div className="flex items-center gap-2">
                            <EUFlagIcon className="h-8 w-8 rounded-full" />
                            <SelectValue />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="eur">EUR</SelectItem>
                        <SelectItem value="usd">USD</SelectItem>
                    </SelectContent>
                </Select>
              <div className="text-lg font-bold">275.68</div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center justify-center">
                <Button variant="outline" size="icon" className="p-1 rounded-lg bg-card h-8 w-8">
                    <Repeat className="h-4 w-4 text-muted-foreground" />
                </Button>
            </div>
        </div>
        <div className="mt-4 space-y-1 text-sm flex justify-between">
            <p className="text-muted-foreground">1.00 USD = 0.92 Euro</p>
            <p className="text-muted-foreground">Exchange fee: <span className="font-medium text-foreground">$12.44</span></p>
        </div>
        <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 font-semibold">
          Exchange
        </Button>
      </CardContent>
    </Card>
  );
}
