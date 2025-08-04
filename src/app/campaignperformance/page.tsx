
'use client';

import DashboardLayout from '@/components/layout/dashboard-layout';
import { CampaignPerformanceTable } from '@/components/datatable/campaign-performance-table';

const campaignData = [
    {
      campaignName: "Summer Sale 2024",
      channel: "Facebook",
      impressions: 120500,
      clicks: 4820,
      ctr: "4.00%",
      conversions: 241
    },
    {
      campaignName: "New Product Launch",
      channel: "Google Ads",
      impressions: 250000,
      clicks: 12500,
      ctr: "5.00%",
      conversions: 750
    },
    {
      campaignName: "Email Blast Q2",
      channel: "Email",
      impressions: 80000,
      clicks: 9600,
      ctr: "12.00%",
      conversions: 1200
    },
    {
      campaignName: "Holiday Special",
      channel: "Instagram",
      impressions: 180000,
      clicks: 10800,
      ctr: "6.00%",
      conversions: 540
    },
    {
      campaignName: "Content Marketing Push",
      channel: "LinkedIn",
      impressions: 95000,
      clicks: 3800,
      ctr: "4.00%",
      conversions: 190
    },
    {
      campaignName: "Spring Collection",
      channel: "Pinterest",
      impressions: 60000,
      clicks: 3000,
      ctr: "5.00%",
      conversions: 210
    },
    {
      campaignName: "Referral Program",
      channel: "Direct",
      impressions: 30000,
      clicks: 1500,
      ctr: "5.00%",
      conversions: 300
    },
    {
      campaignName: "Black Friday Deals",
      channel: "Google Ads",
      impressions: 400000,
      clicks: 28000,
      ctr: "7.00%",
      conversions: 2800
    },
    {
      campaignName: "Back to School",
      channel: "Facebook",
      impressions: 150000,
      clicks: 7500,
      ctr: "5.00%",
      conversions: 450
    },
    {
      campaignName: "Webinar Promotion",
      channel: "Email",
      impressions: 50000,
      clicks: 6000,
      ctr: "12.00%",
      conversions: 800
    }
  ];
  

export default function CampaignPerformancePage() {
  return (
    <DashboardLayout
      title="Campaign Performance"
      subtitle="Here's your campaign performance data."
    >
        <div className="rounded-3xl border bg-card text-card-foreground shadow-sm">
            <CampaignPerformanceTable data={campaignData} />
        </div>
    </DashboardLayout>
  );
}
