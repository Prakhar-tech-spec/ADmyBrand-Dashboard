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
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type Transaction = {
  name: string;
  date: string;
  status: 'Received' | 'Sent' | 'Payment';
  amount: string;
  avatar: string;
  avatarHint: string;
};

const transactions: Transaction[] = [
  { name: 'Segment LLC', date: '22 July 2024, 16:43', status: 'Received', amount: '+$200.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'company logo' },
  { name: 'Kari Rasmussen', date: '21 July 2024, 12:22', status: 'Sent', amount: '-$20.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'woman portrait' },
  { name: 'FocalPoint', date: '21 July 2024, 11:38', status: 'Payment', amount: '-$25.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'tech logo' },
  { name: 'Nataly Craig', date: '21 July 2024, 10:22', status: 'Received', amount: '+$200.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'woman smiling' },
  { name: 'Lucy Jones', date: '20 July 2024, 16:43', status: 'Received', amount: '+$100.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'profile picture' },
  { name: 'Alec Dawson', date: '20 July 2024, 18:43', status: 'Sent', amount: '-$64.00', avatar: 'https://placehold.co/40x40.png', avatarHint: 'man profile' },
];

const statusStyles = {
    Received: 'bg-highlight-green/20 text-highlight-green border-highlight-green/30',
    Sent: 'bg-highlight-red/20 text-highlight-red border-highlight-red/30',
    Payment: 'bg-secondary text-secondary-foreground border-border'
}

export function TransactionsTable() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.name}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={transaction.avatar} alt={transaction.name} data-ai-hint={transaction.avatarHint} />
                      <AvatarFallback>{transaction.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{transaction.name}</div>
                      <div className="text-sm text-muted-foreground md:hidden">{transaction.date}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">{transaction.date}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn('font-medium', statusStyles[transaction.status])}>
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className={cn(
                    "text-right font-semibold",
                    transaction.amount.startsWith('+') ? 'text-highlight-green' : 'text-primary'
                )}>
                  {transaction.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="ghost" className="text-primary hover:text-primary">
          View all transactions
        </Button>
      </CardFooter>
    </Card>
  );
}
