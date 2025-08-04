
'use client';

import { useState, useMemo } from 'react';
import { DateRange } from 'react-day-picker';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { AlertsTable } from '@/components/alerts/alerts-table';
import { Alert } from '@/components/alerts/columns';
import { useAppToast } from '@/context/toaster-context';

const initialAlertsData: Alert[] = [
    {
      id: "ALERT-001",
      timestamp: "2025-08-03 11:03",
      alertType: "Performance",
      message: "Campaign “Summer Sale” has 0.5% CTR drop in last 24 hrs",
      severity: "Warning",
      status: "Unread"
    },
    {
      id: "ALERT-002",
      timestamp: "2025-08-03 10:40",
      alertType: "System",
      message: "Chart rendering failed for Campaign ID #1023",
      severity: "Error",
      status: "Unread"
    },
    {
      id: "ALERT-003",
      timestamp: "2025-08-02 18:15",
      alertType: "Budget",
      message: "Campaign “Fashion Blitz” has reached 95% of its budget limit",
      severity: "Critical",
      status: "Resolved"
    },
    {
      id: "ALERT-004",
      timestamp: "2025-08-01 21:04",
      alertType: "Engagement",
      message: "Social campaign “#BackToSchool” has a spike in conversions",
      severity: "Info",
      status: "Acknowledged"
    },
    {
      id: "ALERT-005",
      timestamp: "2025-08-01 15:30",
      alertType: "System",
      message: "API endpoint for analytics is slow ( > 2s )",
      severity: "Warning",
      status: "Unread"
    },
    {
      id: "ALERT-006",
      timestamp: "2025-08-01 09:00",
      alertType: "Budget",
      message: "New budget of $5000 approved for 'Q3 Push'",
      severity: "Info",
      status: "Acknowledged"
    },
    {
      id: "ALERT-007",
      timestamp: "2025-07-31 17:55",
      alertType: "System",
      message: "Database connection failed. Retrying...",
      severity: "Critical",
      status: "Unread"
    },
    {
      id: "ALERT-008",
      timestamp: "2025-07-31 14:20",
      alertType: "Performance",
      message: "Campaign 'Tech Launch' CPC is 25% higher than average",
      severity: "Warning",
      status: "Resolved"
    },
    {
        id: "ALERT-009",
        timestamp: "2025-07-30 12:00",
        alertType: "User",
        message: "User 'john.doe@example.com' reported a login issue.",
        severity: "Error",
        status: "Resolved"
    },
    {
        id: "ALERT-010",
        timestamp: "2025-07-29 18:00",
        alertType: "Engagement",
        message: "Over 10,000 new sign-ups from 'Summer Deals' campaign.",
        severity: "Info",
        status: "Acknowledged"
    },
    {
        id: "ALERT-011",
        timestamp: "2025-07-29 17:00",
        alertType: "System",
        message: "Server CPU utilization reached 90%.",
        severity: "Critical",
        status: "Unread"
    },
    {
        id: "ALERT-012",
        timestamp: "2025-07-29 16:30",
        alertType: "Performance",
        message: "Ad spend for 'Cyber Monday' campaign is over budget.",
        severity: "Warning",
        status: "Resolved"
    },
    {
        id: "ALERT-013",
        timestamp: "2025-07-29 15:00",
        alertType: "Budget",
        message: "Campaign 'Holiday Giveaway' is paused due to budget exhaustion.",
        severity: "Error",
        status: "Unread"
    },
    {
        id: "ALERT-014",
        timestamp: "2025-07-29 14:00",
        alertType: "Engagement",
        message: "New comment on ad 'Spring Fashion'.",
        severity: "Info",
        status: "Acknowledged"
    },
    {
        id: "ALERT-015",
        timestamp: "2025-07-28 11:00",
        alertType: "User",
        message: "Suspicious login attempt from an unknown IP address.",
        severity: "Critical",
        status: "Unread"
    },
    {
        id: "ALERT-016",
        timestamp: "2025-07-28 10:00",
        alertType: "System",
        message: "Scheduled maintenance starting in 1 hour.",
        severity: "Info",
        status: "Acknowledged"
    },
    {
        id: "ALERT-017",
        timestamp: "2025-07-28 09:00",
        alertType: "Performance",
        message: "Conversion rate for 'Google Ads' dropped by 15%.",
        severity: "Warning",
        status: "Resolved"
    },
    {
        id: "ALERT-018",
        timestamp: "2025-07-27 18:00",
        alertType: "System",
        message: "Backup completed successfully.",
        severity: "Info",
        status: "Resolved"
    },
    {
        id: "ALERT-019",
        timestamp: "2025-07-27 16:00",
        alertType: "Budget",
        message: "Campaign 'Q4 Sale' has used 50% of its budget.",
        severity: "Info",
        status: "Acknowledged"
    },
    {
        id: "ALERT-020",
        timestamp: "2025-07-27 12:00",
        alertType: "System",
        message: "Disk space is running low on server.",
        severity: "Error",
        status: "Unread"
    },
    {
        id: "ALERT-021",
        timestamp: "2025-07-26 20:00",
        alertType: "Engagement",
        message: "High number of negative comments on 'New Ad' campaign.",
        severity: "Warning",
        status: "Unread"
    },
    {
        id: "ALERT-022",
        timestamp: "2025-07-26 15:00",
        alertType: "User",
        message: "User 'jane.doe@example.com' password will expire in 3 days.",
        severity: "Info",
        status: "Acknowledged"
    },
    {
        id: "ALERT-023",
        timestamp: "2025-07-26 10:00",
        alertType: "Performance",
        message: "Ad 'Winter Special' is underperforming.",
        severity: "Warning",
        status: "Resolved"
    },
    {
        id: "ALERT-024",
        timestamp: "2025-07-25 19:00",
        alertType: "System",
        message: "New security patch applied to all servers.",
        severity: "Info",
        status: "Resolved"
    },
    {
        id: "ALERT-025",
        timestamp: "2025-07-25 14:00",
        alertType: "Budget",
        message: "Budget for 'Social Media' campaign increased by 20%.",
        severity: "Info",
        status: "Acknowledged"
    },
    {
        id: "ALERT-026",
        timestamp: "2025-07-25 11:00",
        alertType: "System",
        message: "Failed to connect to third-party API.",
        severity: "Error",
        status: "Unread"
    },
    {
        id: "ALERT-027",
        timestamp: "2025-07-24 17:00",
        alertType: "Engagement",
        message: "'Tech Gadget' ad reached 1 million impressions.",
        severity: "Info",
        status: "Acknowledged"
    },
    {
        id: "ALERT-028",
        timestamp: "2025-07-24 13:00",
        alertType: "User",
        message: "User 'admin@example.com' logged in from a new device.",
        severity: "Warning",
        status: "Unread"
    },
    {
        id: "ALERT-029",
        timestamp: "2025-07-24 09:00",
        alertType: "Performance",
        message: "Website uptime is at 99.99% for the past 30 days.",
        severity: "Info",
        status: "Resolved"
    },
    {
        id: "ALERT-030",
        timestamp: "2025-07-23 16:00",
        alertType: "System",
        message: "SSL certificate for the main domain will expire in 10 days.",
        severity: "Critical",
        status: "Unread"
    },
    {
        id: "ALERT-031",
        timestamp: "2025-07-23 12:00",
        alertType: "Budget",
        message: "Ad campaign 'Summer Trip' is not spending its daily budget.",
        severity: "Warning",
        status: "Resolved"
    },
    {
        id: "ALERT-032",
        timestamp: "2025-07-23 10:00",
        alertType: "Engagement",
        message: "Your ad account has been approved for new features.",
        severity: "Info",
        status: "Acknowledged"
    },
    {
        id: "ALERT-033",
        timestamp: "2025-07-22 18:00",
        alertType: "System",
        message: "A new user role 'Analyst' has been created.",
        severity: "Info",
        status: "Resolved"
    },
    {
        id: "ALERT-034",
        timestamp: "2025-07-22 14:00",
        alertType: "Performance",
        message: "Click-through rate for 'Email Campaign' has increased by 10%.",
        severity: "Info",
        status: "Acknowledged"
    },
    {
        id: "ALERT-035",
        timestamp: "2025-07-22 11:00",
        alertType: "User",
        message: "User 'test@example.com' has been inactive for 90 days.",
        severity: "Warning",
        status: "Unread"
    },
    {
        id: "ALERT-036",
        timestamp: "2025-07-21 21:00",
        alertType: "System",
        message: "API rate limit exceeded for analytics service.",
        severity: "Error",
        status: "Unread"
    },
    {
        id: "ALERT-037",
        timestamp: "2025-07-21 16:00",
        alertType: "Budget",
        message: "'Black Friday' campaign budget is fully allocated.",
        severity: "Info",
        status: "Acknowledged"
    },
    {
        id: "ALERT-038",
        timestamp: "2025-07-21 13:00",
        alertType: "Engagement",
        message: "Ad 'Free Shipping' has been shared over 1,000 times.",
        severity: "Info",
        status: "Acknowledged"
    },
    {
        id: "ALERT-039",
        timestamp: "2025-07-20 17:00",
        alertType: "System",
        message: "Database schema updated successfully.",
        severity: "Info",
        status: "Resolved"
    },
    {
        id: "ALERT-040",
        timestamp: "2025-07-20 11:00",
        alertType: "Performance",
        message: "Ad campaign 'New Year's' has ended.",
        severity: "Info",
        status: "Resolved"
    }
];

export default function AlertsPage() {
    const [alerts, setAlerts] = useState<Alert[]>(initialAlertsData);
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
    const { toasterRef } = useAppToast();

    const deleteAlert = (alertId: string) => {
        setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== alertId));
        toasterRef.current?.show({
            title: "Alert Deleted",
            message: `Alert ${alertId} has been successfully deleted.`,
            variant: "success",
        });
    }

    const filteredData = useMemo(() => {
        if (!dateRange || (!dateRange.from && !dateRange.to)) {
          return alerts;
        }
        return alerts.filter(item => {
          const itemDate = new Date(item.timestamp);
          const from = dateRange.from ? new Date(dateRange.from) : null;
          const to = dateRange.to ? new Date(dateRange.to) : null;
    
          if (from && to) {
            // Set 'to' date to the end of the day
            to.setHours(23, 59, 59, 999);
            return itemDate >= from && itemDate <= to;
          }
          if (from) {
            return itemDate >= from;
          }
          if (to) {
            to.setHours(23, 59, 59, 999);
            return itemDate <= to;
          }
          return true;
        });
      }, [alerts, dateRange]);

  return (
    <DashboardLayout
      title="Alerts & Logs"
      subtitle="Here's a list of recent events, errors, and notifications."
    >
        <div className="rounded-3xl border bg-card text-card-foreground shadow-sm">
            <AlertsTable data={filteredData} onDateChange={setDateRange} onDelete={deleteAlert} />
        </div>
    </DashboardLayout>
  );
}
