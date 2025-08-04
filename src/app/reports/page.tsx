

'use client';

import { motion } from 'framer-motion';
import { ChartContainer } from '@/components/ui/chart';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { SalesLineChart } from '@/components/reports/sales-line-chart';
import { RevenueBarChart } from '@/components/reports/revenue-bar-chart';
import { TrafficSourcePieChart } from '@/components/reports/traffic-source-pie-chart';

export default function ReportsPage() {

  return (
    <DashboardLayout
      title="Reports"
      subtitle="Here are your latest reports."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
            <SalesLineChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
            <RevenueBarChart />
        </div>
        <div>
            <TrafficSourcePieChart />
        </div>
      </div>
    </DashboardLayout>
  );
}
