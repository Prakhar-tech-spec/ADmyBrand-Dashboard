
'use client';

import { motion } from 'framer-motion';
import { ChartContainer } from '@/components/ui/chart';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { SalesLineChart } from '@/components/reports/sales-line-chart';
import { RevenueBarChart } from '@/components/reports/revenue-bar-chart';
import { TrafficSourcePieChart } from '@/components/reports/traffic-source-pie-chart';

export default function ReportsPage() {
  const cardAnimation = (index: number) => ({
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.25, 1, 0.5, 1],
    },
  });

  return (
    <DashboardLayout
      title="Reports"
      subtitle="Here are your latest reports."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div className="lg:col-span-2" {...cardAnimation(0)}>
            <SalesLineChart />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <motion.div className="lg:col-span-2" {...cardAnimation(1)}>
            <RevenueBarChart />
        </motion.div>
        <motion.div {...cardAnimation(2)}>
            <TrafficSourcePieChart />
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
