'use client';

import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const contacts = [
  { name: 'User 1', hint: 'woman portrait' },
  { name: 'User 2', hint: 'man portrait' },
  { name: 'User 3', hint: 'person smiling' },
  { name: 'User 4', hint: 'woman profile' },
  { name: 'User 5', hint: 'man glasses' },
];

export function ContactsCard() {
  return (
    <Card className="h-full shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium text-secondary-foreground">
            Recent Contacts
          </CardTitle>
          <Button variant="link" className="text-secondary-foreground h-auto p-0">
            Manage
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="icon" className="h-12 w-12 shrink-0 rounded-full bg-accent/20 text-accent hover:bg-accent/30">
            <Plus className="h-6 w-6" />
          </Button>
          <div className="flex -space-x-3">
            {contacts.map((contact, index) => (
              <Avatar key={index} className="h-12 w-12 border-4 border-card">
                <AvatarImage src={`https://placehold.co/48x48.png`} alt={contact.name} data-ai-hint={contact.hint} />
                <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
