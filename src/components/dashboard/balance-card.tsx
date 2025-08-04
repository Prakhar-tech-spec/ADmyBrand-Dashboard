'use client';

import { ArrowDown, ArrowUp } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { USFlagIcon } from '../icons/us-flag';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export function BalanceCard() {
  return (
    <Card className="shadow-sm rounded-3xl bg-primary text-primary-foreground border-none">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
            <div>
                <CardTitle className="text-base font-semibold text-primary-foreground">
                    Total Balance
                </CardTitle>
                <CardDescription className='text-primary-foreground/70'>Available for use</CardDescription>
            </div>
            <Select defaultValue="usd">
                <SelectTrigger className="w-auto bg-primary-foreground/10 border-none font-semibold rounded-full h-9 px-3">
                    <div className="flex items-center gap-2">
                        <USFlagIcon className="h-5 w-5 rounded-full" />
                        <SelectValue />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Card className='rounded-3xl'>
            <CardContent className='p-4'>
                <div className="text-sm text-secondary-foreground">Available Funds</div>
                <div className="text-4xl font-bold text-primary mt-1">
                    $18,248<span className='text-muted-foreground'>.44</span>
                </div>
                <div className="mt-4 grid grid-cols-2 items-center gap-2">
                    <Button variant="ghost" className="w-full justify-start h-12 rounded-xl bg-card font-semibold text-secondary-foreground gap-2">
                        <div className="p-1 rounded-full border-2 border-secondary">
                            <ArrowUp className="h-4 w-4" />
                        </div>
                        Send
                    </Button>
                    <Separator orientation='vertical' className='h-6' />
                    <Button variant="ghost" className="w-full justify-start h-12 rounded-xl bg-card font-semibold text-secondary-foreground gap-2 -ml-10">
                        <div className="p-1 rounded-full border-2 border-secondary">
                            <ArrowDown className="h-4 w-4" />
                        </div>
                        Request
                    </Button>
                </div>
            </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
