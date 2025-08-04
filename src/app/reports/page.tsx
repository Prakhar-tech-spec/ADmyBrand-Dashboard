
'use client';

import { Download } from 'lucide-react';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { SalesLineChart } from '@/components/reports/sales-line-chart';
import { RevenueBarChart } from '@/components/reports/revenue-bar-chart';
import { TrafficSourcePieChart } from '@/components/reports/traffic-source-pie-chart';
import { CampaignChannelChart } from '@/components/reports/campaign-channel-chart';
import { CustomerSegmentationChart } from '@/components/reports/customer-segmentation-chart';
import { Button } from '@/components/ui/button';
import { generatePdf } from '@/lib/pdf-generator';
import { Campaign } from '@/components/datatable/columns';

const campaignData: Campaign[] = [
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

export default function ReportsPage() {
  const handleDownload = () => {
    generatePdf(campaignData);
  }

  return (
    <DashboardLayout
      title="Reports"
      subtitle="Here are your latest reports."
    >
      <div className="flex justify-end mb-4">
        <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
        </Button>
      </div>
      <div id="reports-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div id="sales-line-chart">
                <SalesLineChart />
            </div>
            <div id="revenue-bar-chart">
                <RevenueBarChart />
            </div>
            <div id="traffic-source-pie-chart">
                <TrafficSourcePieChart />
            </div>
            <div id="customer-segmentation-chart">
                <CustomerSegmentationChart />
            </div>
            <div className="lg:col-span-2" id="campaign-channel-chart">
                <CampaignChannelChart />
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
