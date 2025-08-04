
'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { USFlagIcon } from '../icons/us-flag';
import { EUFlagIcon } from '../icons/eu-flag';
import { INFlagIcon } from '../icons/in-flag';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

type BalanceCardProps = {
    title?: string;
    showDropdown?: boolean;
}

const currencyIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    usd: USFlagIcon,
    eur: EUFlagIcon,
    inr: INFlagIcon,
};

export function BalanceCard({ title = "Revenue", showDropdown = false }: BalanceCardProps) {
  const [selectedCurrency, setSelectedCurrency] = useState('usd');
  const CurrencyIcon = currencyIcons[selectedCurrency];

  return (
    <Card className="shadow-sm rounded-3xl bg-gradient-to-b from-balance-card-shiny-start to-balance-card-shiny-end text-primary-foreground border-none p-2">
      <CardHeader className="pb-4 pt-4 px-4">
        <div className="flex items-start justify-between">
            <div>
                <CardTitle className="text-base font-semibold text-primary-foreground">
                    {title}
                </CardTitle>
                <CardDescription className='text-primary-foreground/70'>Available for use</CardDescription>
            </div>
            {showDropdown && (
              <Select defaultValue={selectedCurrency} onValueChange={setSelectedCurrency}>
                  <SelectTrigger className="w-auto bg-transparent border-none font-semibold rounded-full h-9 px-2 gap-2">
                      <div className="flex items-center gap-2">
                          {CurrencyIcon && <CurrencyIcon className="h-5 w-5 rounded-full" />}
                          <SelectValue />
                      </div>
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="inr">INR</SelectItem>
                  </SelectContent>
              </Select>
            )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Card className='rounded-2xl'>
            <CardContent className='p-6'>
                <div className="text-sm text-secondary-foreground">Available Funds</div>
                <div className="text-4xl font-bold text-primary mt-1">
                    $18,248<span className='text-muted-foreground'>.44</span>
                </div>
            </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
