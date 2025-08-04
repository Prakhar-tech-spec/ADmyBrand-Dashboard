

'use client';

import { motion } from 'framer-motion';
import { BalanceCard } from '@/components/dashboard/balance-card';
import { NotesCard } from '@/components/dashboard/notes-card';
import { ExpensesChart } from '@/components/dashboard/expenses-chart';
import { IncomeChart } from '@/components/dashboard/income-chart';
import { IncomeExpenseDonutChart } from '@/components/dashboard/income-expense-donut-chart';
import { ChartContainer } from '@/components/ui/chart';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { GrowthCard } from '@/components/dashboard/growth-card';
import { ForecastCard } from '@/components/dashboard/forecast-card';
import { Campaign } from '@/components/datatable/columns';
import { Customer } from '@/components/customers/columns';
import { Alert } from '@/components/alerts/columns';

const campaignData: Campaign[] = [
    {
      campaignName: "Summer Sale 2024",
      channel: "Facebook",
      impressions: 120500,
      clicks: 4820,
      ctr: "4.00%",
      conversions: 241,
      startDate: "2024-06-01"
    },
    {
      campaignName: "New Product Launch",
      channel: "Google Ads",
      impressions: 250000,
      clicks: 12500,
      ctr: "5.00%",
      conversions: 750,
      startDate: "2024-05-15"
    },
    {
      campaignName: "Email Blast Q2",
      channel: "Email",
      impressions: 80000,
      clicks: 9600,
      ctr: "12.00%",
      conversions: 1200,
      startDate: "2024-04-10"
    },
];

const customerData: Customer[] = [
    {
        id: "CUST-001",
        name: "John Doe",
        email: "john.doe@example.com",
        company: "Example Inc.",
        role: "Admin",
        status: "Active",
        createdAt: "2024-07-01T10:00:00Z"
    },
    {
        id: "CUST-002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        company: "Innovate LLC",
        role: "Member",
        status: "Active",
        createdAt: "2024-07-02T11:30:00Z"
    },
    {
        id: "CUST-003",
        name: "Sam Wilson",
        email: "sam.wilson@tech.co",
        company: "Tech Co",
        role: "Owner",
        status: "Inactive",
        createdAt: "2024-07-03T09:00:00Z"
    },
];

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
];

export default function DashboardPage() {
  const totalIncome = 98248.44;
  const totalExpenses = 72421.84;

  return (
    <DashboardLayout
      title="You're back!"
      subtitle="Let’s go."
    >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            <BalanceCard showDropdown={true}/>
            <GrowthCard />
            <GrowthCard title="Conversions" description="vs last month" label="Conversion Rate" value="+2.6%" />
            <BalanceCard title="Users" value="1,354" label="Active Users" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <NotesCard />
            <ForecastCard
            campaigns={campaignData}
            customers={customerData}
            alerts={alertsData}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <ExpensesChart />
          <IncomeChart />
          <IncomeExpenseDonutChart income={totalIncome} expenses={totalExpenses} />
        </div>
    </DashboardLayout>
  );
}
