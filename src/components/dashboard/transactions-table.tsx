'use client';

import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { FilterIcon } from '../icons/filter-icon';
import { MoreHorizontal, Search } from 'lucide-react';

type Transaction = {
  name: string;
  id: string;
  date: string;
  status: 'Received' | 'Sent' | 'Payment';
  amount: string;
  avatar: string;
  avatarHint: string;
};

const transactions: Transaction[] = [
  { name: 'Segment LLC', id: '#42148930', date: '22 July 2024, 16:43', status: 'Received', amount: '+$200.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'company logo s' },
  { name: 'Kari Rasmussen', id: '#42142456', date: '21 July 2024, 12:22', status: 'Sent', amount: '-$20.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'woman portrait' },
  { name: 'FocalPoint', id: '#22242442', date: '21 July 2024, 11:38', status: 'Payment', amount: '-$25.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'tech logo f' },
  { name: 'Nataly Craig', id: '#55348123', date: '21 July 2024, 10:22', status: 'Received', amount: '+$200.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'woman smiling' },
  { name: 'Lucy Jones', id: '#21248532', date: '20 July 2024, 16:43', status: 'Received', amount: '+$100.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'profile picture' },
  { name: 'Alec Dawson', id: '#42148555', date: '20 July 2024, 18:43', status: 'Sent', amount: '-$64.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'man profile' },
  { name: 'Kelly Williams', id: '#42121930', date: '19 July 2024, 20:22', status: 'Sent', amount: '-$120.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'woman portrait professional' },
  { name: 'BioSyntesis', id: '#86648432', date: '18 July 2024, 17:43', status: 'Payment', amount: '-$32.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'company logo b' },
  { name: 'Galileo', id: '#28748123', date: '17 July 2024, 13:24', status: 'Payment', amount: '-$9.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'company logo g' },
];

const statusStyles = {
    Received: 'bg-highlight-green/10 text-highlight-green',
    Sent: 'bg-highlight-red/10 text-highlight-red',
    Payment: 'bg-secondary text-secondary-foreground'
}

export function TransactionsTable() {
  return (
    <Card className="shadow-sm rounded-3xl h-full">
      <CardHeader>
        <div className='flex justify-between items-start'>
            <div>
                <CardTitle>Transactions</CardTitle>
                <CardDescription>You can view your transaction history</CardDescription>
            </div>
            <div className='flex gap-2'>
                <Button variant="outline" size="icon" className="bg-card">
                    <Search className="h-5 w-5 text-muted-foreground" />
                </Button>
                <Button variant="outline" size="icon" className="bg-card">
                    <FilterIcon />
                </Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='text-muted-foreground'>Name</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className='text-muted-foreground'>Status</TableHead>
              <TableHead className="text-muted-foreground text-right">Amount</TableHead>
              <TableHead className="text-muted-foreground text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.name} className='h-16'>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={transaction.avatar} alt={transaction.name} data-ai-hint={transaction.avatarHint} />
                      <AvatarFallback>{transaction.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{transaction.name}</div>
                      <div className="text-xs text-muted-foreground">{transaction.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                <TableCell>
                    <div className='flex items-center'>
                        <div className={cn('w-2 h-2 rounded-full mr-2', statusStyles[transaction.status])}></div>
                        <span className={cn('font-medium text-sm', statusStyles[transaction.status])}>
                            {transaction.status}
                        </span>
                    </div>
                </TableCell>
                <TableCell className={cn(
                    "text-right font-semibold text-sm",
                    transaction.amount.startsWith('+') ? 'text-highlight-green' : 'text-primary'
                )}>
                  {transaction.amount}
                </TableCell>
                <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                        <MoreHorizontal className='h-5 w-5' />
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center py-4">
        <Button variant="outline" className="text-primary hover:text-primary rounded-lg font-semibold bg-card">
          View all transactions
        </Button>
      </CardFooter>
    </Card>
  );
}
