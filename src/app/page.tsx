
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

export default function DashboardPage() {
  const totalIncome = 98248.44;
  const totalExpenses = 72421.84;

  const cardAnimation = (index: number) => ({
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.25, 1, 0.5, 1], // easeOutExpo
    },
  });

  return (
    <DashboardLayout
      title="You're back!"
      subtitle="Let’s go."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <motion.div {...cardAnimation(0)}>
              <BalanceCard showDropdown={true}/>
            </motion.div>
            <motion.div {...cardAnimation(1)}>
              <GrowthCard />
            </motion.div>
            <motion.div {...cardAnimation(2)}>
              <GrowthCard title="Conversions" description="vs last month" label="Conversion Rate" value="+2.6%" />
            </motion.div>
            <motion.div {...cardAnimation(3)}>
              <BalanceCard title="Users" value="1,354" label="Active Users" />
            </motion.div>
          </div>
        </div>
        <motion.div className="lg:col-span-1" {...cardAnimation(4)}>
          <NotesCard />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <motion.div {...cardAnimation(5)}>
          <ChartContainer
            config={{
              expenses: {
                label: 'Expenses',
                color: 'hsl(var(--chart-1))',
              },
            }}
          >
            <ExpensesChart />
          </ChartContainer>
        </motion.div>
        <motion.div {...cardAnimation(6)}>
          <ChartContainer
            config={{
              income: {
                label: 'Income',
                color: 'hsl(var(--chart-2))',
              },
            }}
          >
            <IncomeChart />
          </ChartContainer>
        </motion.div>
        <motion.div {...cardAnimation(7)}>
          <IncomeExpenseDonutChart income={totalIncome} expenses={totalExpenses} />
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
