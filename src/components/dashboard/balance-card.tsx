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
import { ChevronDown } from 'lucide-react';

export function BalanceCard() {
  return (
    <Card className="shadow-sm rounded-3xl bg-primary text-primary-foreground border-none p-2">
      <CardHeader className="pb-4 pt-4 px-4">
        <div className="flex items-start justify-between">
            <div>
                <CardTitle className="text-base font-semibold text-primary-foreground">
                    Total Balance
                </CardTitle>
                <CardDescription className='text-primary-foreground/70'>Available for use</CardDescription>
            </div>
            <Select defaultValue="usd">
                <SelectTrigger className="w-auto bg-transparent border-none font-semibold rounded-full h-9 px-2 gap-2">
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
      <CardContent className="p-0">
        <Card className='rounded-2xl'>
            <CardContent className='p-6'>
                <div className="text-sm text-secondary-foreground">Available Funds</div>
                <div className="text-4xl font-bold text-primary mt-1">
                    $18,248<span className='text-muted-foreground'>.44</span>
                </div>
                <div className="mt-6 space-y-4">
                    <Button variant="ghost" className="w-auto p-0 h-auto justify-start font-semibold text-secondary-foreground gap-3">
                        <ArrowUp className="h-4 w-4" />
                        Send
                    </Button>
                    <Button variant="ghost" className="w-auto p-0 h-auto justify-start font-semibold text-secondary-foreground gap-3">
                        <ArrowDown className="h-4 w-4" />
                        Request
                    </Button>
                </div>
            </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
