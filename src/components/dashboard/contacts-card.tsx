
'use client';

import { ChevronRight, Plus, Pencil } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const contacts = [
  { name: 'User 1', hint: 'woman portrait' },
  { name: 'User 2', hint: 'man portrait' },
  { name: 'User 3', hint: 'person smiling' },
  { name: 'User 4', hint: 'woman profile' },
  { name: 'User 5', hint: 'man glasses' },
];

type ContactsCardProps = {
  title?: string;
};

export function ContactsCard({ title = 'Growth' }: ContactsCardProps) {
  return (
    <Card className="h-full shadow-sm rounded-3xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className='flex flex-col'>
            <CardTitle className="text-base font-semibold text-foreground/90">
                {title}
            </CardTitle>
            <CardDescription>Send or Request from your contact list</CardDescription>
          </div>
          <Button variant="ghost" size="icon" className='h-6 w-6 text-muted-foreground'>
            <ChevronRight className='w-5 h-5'/>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center -space-x-2">
            {contacts.map((contact, index) => (
            <Avatar key={index} className="h-12 w-12 border-4 border-card">
                <AvatarImage src={`https://placehold.co/48x48.png`} alt={contact.name} data-ai-hint={contact.hint} />
                <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
            </Avatar>
            ))}
        </div>
        <div className="flex items-center gap-2">
            <Button className={cn("w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold")}>
                <div className="rounded-full bg-primary-foreground/20 p-1 mr-2">
                    <Plus className="h-4 w-4 text-primary-foreground" />
                </div>
                Add new
            </Button>
            <Button variant="outline" className={cn("w-full h-12 rounded-xl bg-card font-semibold text-secondary-foreground")}>
                <Pencil className="mr-2 h-4 w-4" />
                Manage
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
