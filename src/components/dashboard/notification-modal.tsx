
'use client'

import { useState, useEffect } from 'react';
import { Bell, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { NotificationsIcon } from '../icons/notifications-icon';
import { useAppToast } from '@/context/toaster-context';

const initialNotifications = [
    {
      id: 1,
      title: "New campaign 'Summer Sale' is live!",
      description: "Check the performance and analytics.",
      time: "2 minutes ago",
    },
    {
      id: 2,
      title: "Budget alert for 'Q2 Marketing'",
      description: "You have used 80% of your budget.",
      time: "1 hour ago",
    },
    {
      id: 3,
      title: "Report for May 2024 is ready",
      description: "View and download the latest report.",
      time: "3 hours ago",
    },
    {
      id: 4,
        title: "New user 'John Doe' signed up",
        description: "A new user has registered.",
        time: "1 day ago",
    },
];

type Notification = typeof initialNotifications[0];

function NotificationList({ notifications, onDelete }: { notifications: Notification[], onDelete: (id: number) => void }) {
    return (
        <div className="grid gap-4 py-4">
            {notifications.length > 0 ? (
                notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start gap-4 group">
                        <div className="bg-secondary p-2.5 rounded-full">
                            <NotificationsIcon className="h-5 w-5 text-secondary-foreground" />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-sm">{notification.title}</p>
                            <p className="text-xs text-muted-foreground">{notification.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => onDelete(notification.id)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                ))
            ) : (
                <div className="text-center text-muted-foreground py-8">
                    You're all caught up!
                </div>
            )}
        </div>
    )
}

type NotificationModalProps = {
    hasNotifications: boolean;
    setHasNotifications: (value: boolean) => void;
}

export function NotificationModal({ hasNotifications, setHasNotifications }: NotificationModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState(initialNotifications);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const { toasterRef } = useAppToast();

    useEffect(() => {
        setHasNotifications(notifications.length > 0);
    }, [notifications, setHasNotifications]);

    const handleDeleteNotification = (id: number) => {
        const originalNotifications = [...notifications];
        const updatedNotifications = notifications.filter(n => n.id !== id);
        setNotifications(updatedNotifications);

        toasterRef.current?.show({
            title: "Notification Deleted",
            message: "The notification has been successfully deleted.",
            variant: "success",
            actions: {
                label: "Undo",
                onClick: () => {
                    setNotifications(originalNotifications);
                },
                variant: "outline",
            }
        });
    }

    const triggerButton = (
        <div className="relative">
            <Button variant="outline" size="icon" className="rounded-full bg-card h-12 w-12">
            <Bell className="h-6 w-6 text-muted-foreground" />
            <span className="sr-only">Notifications</span>
            </Button>
            {hasNotifications && <div className="absolute top-2 right-2.5 h-2.5 w-2.5 rounded-full bg-red-500" />}
        </div>
    );

    const notificationCount = notifications.length;

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {triggerButton}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>Notifications</DialogTitle>
                <DialogDescription>
                    {notificationCount > 0
                        ? `You have ${notificationCount} new message${notificationCount > 1 ? 's' : ''}.`
                        : "No new messages."
                    }
                </DialogDescription>
                </DialogHeader>
                <NotificationList notifications={notifications} onDelete={handleDeleteNotification} />
            </DialogContent>
            </Dialog>
        );
    }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        {triggerButton}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>
            {notificationCount > 0
                ? `You have ${notificationCount} new message${notificationCount > 1 ? 's' : ''}.`
                : "No new messages."
            }
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
            <NotificationList notifications={notifications} onDelete={handleDeleteNotification} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
