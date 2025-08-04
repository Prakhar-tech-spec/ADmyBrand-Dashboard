
'use client';

import DashboardLayout from '@/components/layout/dashboard-layout';
import { AlertsTable } from '@/components/alerts/alerts-table';
import { Alert } from '@/components/alerts/columns';

const alertsData: Alert[] = [
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
    }
];

export default function AlertsPage() {
  return (
    <DashboardLayout
      title="Alerts & Logs"
      subtitle="Here's a list of recent events, errors, and notifications."
    >
        <div className="rounded-3xl border bg-card text-card-foreground shadow-sm">
            <AlertsTable data={alertsData} />
        </div>
    </DashboardLayout>
  );
}
