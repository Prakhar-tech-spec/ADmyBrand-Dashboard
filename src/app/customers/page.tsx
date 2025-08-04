
'use client';

import DashboardLayout from '@/components/layout/dashboard-layout';
import { CustomerTable } from '@/components/customers/customer-table';
import { Customer } from '@/components/customers/columns';

const customerData: Customer[] = [
    {
        id: "CUST-001",
        name: "John Doe",
        email: "john.doe@example.com",
        company: "Example Inc.",
        role: "Admin",
        status: "Active"
    },
    {
        id: "CUST-002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        company: "Innovate LLC",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-003",
        name: "Sam Wilson",
        email: "sam.wilson@tech.co",
        company: "Tech Co",
        role: "Owner",
        status: "Inactive"
    },
    {
        id: "CUST-004",
        name: "Alice Johnson",
        email: "alice.j@web.com",
        company: "Web Solutions",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-005",
        name: "Bob Brown",
        email: "bob.brown@mail.com",
        company: "Mail Services",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-006",
        name: "Charlie Davis",
        email: "charlie.d@email.com",
        company: "Email Corp",
        role: "Admin",
        status: "Inactive"
    },
    {
        id: "CUST-007",
        name: "Diana Miller",
        email: "diana.m@service.com",
        company: "Service Pro",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-008",
        name: "Ethan Martinez",
        email: "ethan.m@solutions.com",
        company: "Solutions Inc.",
        role: "Owner",
        status: "Active"
    },
    {
        id: "CUST-009",
        name: "Fiona Garcia",
        email: "fiona.g@tech.net",
        company: "Tech Net",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-010",
        name: "George Rodriguez",
        email: "george.r@web.org",
        company: "Web Org",
        role: "Member",
        status: "Inactive"
    }
];

export default function CustomersPage() {
  return (
    <DashboardLayout
      title="Customers"
      subtitle="Here's a list of your customers."
    >
        <div className="rounded-3xl border bg-card text-card-foreground shadow-sm">
            <CustomerTable data={customerData} />
        </div>
    </DashboardLayout>
  );
}
