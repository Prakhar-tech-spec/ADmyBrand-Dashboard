
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
    },
    {
      campaignName: "Cyber Monday Flash Sale",
      channel: "Instagram",
      impressions: 220000,
      clicks: 15400,
      ctr: "7.00%",
      conversions: 990
    },
    {
      campaignName: "Q4 Lead Generation",
      channel: "LinkedIn",
      impressions: 110000,
      clicks: 4400,
      ctr: "4.00%",
      conversions: 220
    },
    {
      campaignName: "New Year's Resolution",
      channel: "Google Ads",
      impressions: 300000,
      clicks: 18000,
      ctr: "6.00%",
      conversions: 1500
    },
    {
      campaignName: "Valentine's Day Special",
      channel: "Pinterest",
      impressions: 75000,
      clicks: 4500,
      ctr: "6.00%",
      conversions: 300
    },
    {
      campaignName: "Influencer Collab",
      channel: "Instagram",
      impressions: 90000,
      clicks: 8100,
      ctr: "9.00%",
      conversions: 450
    },
    {
      campaignName: "B2B Outreach",
      channel: "Email",
      impressions: 40000,
      clicks: 4000,
      ctr: "10.00%",
      conversions: 400
    },
    {
      campaignName: "Local SEO Boost",
      channel: "Direct",
      impressions: 25000,
      clicks: 1000,
      ctr: "4.00%",
      conversions: 150
    },
    {
      campaignName: "Mobile App Installs",
      channel: "Facebook",
      impressions: 500000,
      clicks: 10000,
      ctr: "2.00%",
      conversions: 5000
    },
    {
      campaignName: "Video Ad Campaign",
      channel: "Google Ads",
      impressions: 600000,
      clicks: 30000,
      ctr: "5.00%",
      conversions: 1800
    },
    {
      campaignName: "Retargeting Campaign",
      channel: "Facebook",
      impressions: 85000,
      clicks: 5950,
      ctr: "7.00%",
      conversions: 680
    },
    {
      campaignName: "Affiliate Marketing",
      channel: "Direct",
      impressions: 45000,
      clicks: 2250,
      ctr: "5.00%",
      conversions: 450
    },
    {
      campaignName: "Podcast Sponsorship",
      channel: "Direct",
      impressions: 20000,
      clicks: 800,
      ctr: "4.00%",
      conversions: 80
    },
    {
      campaignName: "Community Building",
      channel: "LinkedIn",
      impressions: 65000,
      clicks: 1950,
      ctr: "3.00%",
      conversions: 130
    },
    {
      campaignName: "Google Shopping Ads",
      channel: "Google Ads",
      impressions: 350000,
      clicks: 21000,
      ctr: "6.00%",
      conversions: 2100
    },
    {
      campaignName: "Seasonal Newsletter",
      channel: "Email",
      impressions: 90000,
      clicks: 10800,
      ctr: "12.00%",
      conversions: 1350
    },
    {
      campaignName: "Brand Awareness Campaign",
      channel: "Instagram",
      impressions: 450000,
      clicks: 13500,
      ctr: "3.00%",
      conversions: 225
    },
    {
      campaignName: "Interactive Story Ads",
      channel: "Facebook",
      impressions: 130000,
      clicks: 9100,
      ctr: "7.00%",
      conversions: 520
    },
    {
      campaignName: "DIY Project Ideas",
      channel: "Pinterest",
      impressions: 88000,
      clicks: 5280,
      ctr: "6.00%",
      conversions: 352
    },
    {
      campaignName: "Free Trial Offer",
      channel: "Google Ads",
      impressions: 180000,
      clicks: 14400,
      ctr: "8.00%",
      conversions: 1152
    },
    {
      campaignName: "Customer Loyalty Program",
      channel: "Email",
      impressions: 70000,
      clicks: 9800,
      ctr: "14.00%",
      conversions: 1470
    },
    {
      campaignName: "Partnership Announcement",
      channel: "LinkedIn",
      impressions: 120000,
      clicks: 4800,
      ctr: "4.00%",
      conversions: 240
    },
    {
      campaignName: "Flash Giveaway",
      channel: "Instagram",
      impressions: 100000,
      clicks: 12000,
      ctr: "12.00%",
      conversions: 600
    },
    {
      campaignName: "Early Access Sign-ups",
      channel: "Direct",
      impressions: 35000,
      clicks: 2100,
      ctr: "6.00%",
      conversions: 420
    },
    {
      campaignName: "Back-in-Stock Alert",
      channel: "Email",
      impressions: 25000,
      clicks: 3750,
      ctr: "15.00%",
      conversions: 560
    },
    {
      campaignName: "User-Generated Content Contest",
      channel: "Facebook",
      impressions: 95000,
      clicks: 6650,
      ctr: "7.00%",
      conversions: 380
    },
    {
      campaignName: "Thought Leadership Whitepaper",
      channel: "LinkedIn",
      impressions: 78000,
      clicks: 2340,
      ctr: "3.00%",
      conversions: 156
    },
    {
      campaignName: "Local Event Promotion",
      channel: "Google Ads",
      impressions: 55000,
      clicks: 4400,
      ctr: "8.00%",
      conversions: 352
    },
    {
      campaignName: "Behind-the-Scenes Look",
      channel: "Instagram",
      impressions: 160000,
      clicks: 9600,
      ctr: "6.00%",
      conversions: 480
    },
    {
      campaignName: "Customer Story Showcase",
      channel: "Facebook",
      impressions: 115000,
      clicks: 6900,
      ctr: "6.00%",
      conversions: 414
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
