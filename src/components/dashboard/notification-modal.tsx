
'use client'

import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { NotificationsIcon } from '../icons/notifications-icon';

const notifications = [
    {
      title: "New campaign 'Summer Sale' is live!",
      description: "Check the performance and analytics.",
      time: "2 minutes ago",
    },
    {
      title: "Budget alert for 'Q2 Marketing'",
      description: "You have used 80% of your budget.",
      time: "1 hour ago",
    },
    {
      title: "Report for May 2024 is ready",
      description: "View and download the latest report.",
      time: "3 hours ago",
    },
    {
        title: "New user 'John Doe' signed up",
        description: "A new user has registered.",
        time: "1 day ago",
    },
];

export function NotificationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative">
          <Button variant="outline" size="icon" className="rounded-full bg-card h-12 w-12">
            <Bell className="h-6 w-6 text-muted-foreground" />
            <span className="sr-only">Notifications</span>
          </Button>
          <div className="absolute top-2 right-2.5 h-2.5 w-2.5 rounded-full bg-red-500" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription>You have {notifications.length} new messages.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            {notifications.map((notification, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="bg-secondary p-2.5 rounded-full">
                        <NotificationsIcon className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm">{notification.title}</p>
                        <p className="text-xs text-muted-foreground">{notification.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                </div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
