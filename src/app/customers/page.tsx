
'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { CustomerTable } from '@/components/customers/customer-table';
import { Customer } from '@/components/customers/columns';
import { AddCustomerForm } from '@/components/customers/add-customer-form';

const initialCustomerData: Customer[] = [
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
    },
    {
        id: "CUST-011",
        name: "Hannah White",
        email: "hannah.w@example.com",
        company: "Data Dynamics",
        role: "Admin",
        status: "Active"
    },
    {
        id: "CUST-012",
        name: "Ian Green",
        email: "ian.g@innovate.com",
        company: "Innovate LLC",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-013",
        name: "Jack Black",
        email: "jack.b@tech.co",
        company: "Tech Co",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-014",
        name: "Karen Hill",
        email: "karen.h@web.com",
        company: "Web Solutions",
        role: "Owner",
        status: "Inactive"
    },
    {
        id: "CUST-015",
        name: "Leo King",
        email: "leo.k@mail.com",
        company: "Mail Services",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-016",
        name: "Mia Wright",
        email: "mia.w@email.com",
        company: "Email Corp",
        role: "Admin",
        status: "Active"
    },
    {
        id: "CUST-017",
        name: "Noah Scott",
        email: "noah.s@service.com",
        company: "Service Pro",
        role: "Member",
        status: "Inactive"
    },
    {
        id: "CUST-018",
        name: "Olivia Adams",
        email: "olivia.a@solutions.com",
        company: "Solutions Inc.",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-019",
        name: "Peter Nelson",
        email: "peter.n@tech.net",
        company: "Tech Net",
        role: "Owner",
        status: "Active"
    },
    {
        id: "CUST-020",
        name: "Quinn Carter",
        email: "quinn.c@web.org",
        company: "Web Org",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-021",
        name: "Rachel Mitchell",
        email: "rachel.m@example.com",
        company: "Example Inc.",
        role: "Member",
        status: "Inactive"
    },
    {
        id: "CUST-022",
        name: "Steve Turner",
        email: "steve.t@innovate.com",
        company: "Innovate LLC",
        role: "Admin",
        status: "Active"
    },
    {
        id: "CUST-023",
        name: "Tina Phillips",
        email: "tina.p@tech.co",
        company: "Tech Co",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-024",
        name: "Uma Kumar",
        email: "uma.k@web.com",
        company: "Web Solutions",
        role: "Owner",
        status: "Active"
    },
    {
        id: "CUST-025",
        name: "Victor Perez",
        email: "victor.p@mail.com",
        company: "Mail Services",
        role: "Member",
        status: "Inactive"
    },
    {
        id: "CUST-026",
        name: "Wendy Rogers",
        email: "wendy.r@email.com",
        company: "Email Corp",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-027",
        name: "Xander Hall",
        email: "xander.h@service.com",
        company: "Service Pro",
        role: "Admin",
        status: "Active"
    },
    {
        id: "CUST-028",
        name: "Yara Reed",
        email: "yara.r@solutions.com",
        company: "Solutions Inc.",
        role: "Member",
        status: "Inactive"
    },
    {
        id: "CUST-029",
        name: "Zane Cook",
        email: "zane.c@tech.net",
        company: "Tech Net",
        role: "Owner",
        status: "Active"
    },
    {
        id: "CUST-030",
        name: "Ava Morgan",
        email: "ava.m@web.org",
        company: "Web Org",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-031",
        name: "Ben Bailey",
        email: "ben.b@example.com",
        company: "Example Inc.",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-032",
        name: "Chloe Cooper",
        email: "chloe.c@innovate.com",
        company: "Innovate LLC",
        role: "Admin",
        status: "Inactive"
    },
    {
        id: "CUST-033",
        name: "David Gray",
        email: "david.g@tech.co",
        company: "Tech Co",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-034",
        name: "Ella Price",
        email: "ella.p@web.com",
        company: "Web Solutions",
        role: "Owner",
        status: "Active"
    },
    {
        id: "CUST-035",
        name: "Frank Howard",
        email: "frank.h@mail.com",
        company: "Mail Services",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-036",
        name: "Grace Ward",
        email: "grace.w@email.com",
        company: "Email Corp",
        role: "Member",
        status: "Inactive"
    },
    {
        id: "CUST-037",
        name: "Henry Brooks",
        email: "henry.b@service.com",
        company: "Service Pro",
        role: "Admin",
        status: "Active"
    },
    {
        id: "CUST-038",
        name: "Isla Watson",
        email: "isla.w@solutions.com",
        company: "Solutions Inc.",
        role: "Member",
        status: "Active"
    },
    {
        id: "CUST-039",
        name: "Jake Edwards",
        email: "jake.e@tech.net",
        company: "Tech Net",
        role: "Owner",
        status: "Inactive"
    },
    {
        id: "CUST-040",
        name: "Lily Bennett",
        email: "lily.b@web.org",
        company: "Web Org",
        role: "Member",
        status: "Active"
    }
];

export default function CustomersPage() {
    const [customers, setCustomers] = useState<Customer[]>(initialCustomerData);

    const addCustomer = (customer: Omit<Customer, 'id'>) => {
        const newCustomer: Customer = {
            id: `CUST-${String(customers.length + 1).padStart(3, '0')}`,
            ...customer
        };
        setCustomers(prevCustomers => [newCustomer, ...prevCustomers]);
    }

  return (
    <DashboardLayout
      title="Customers"
      subtitle="Here's a list of your customers."
    >
        <div className="rounded-3xl border bg-card text-card-foreground shadow-sm">
            <CustomerTable data={customers}>
                <AddCustomerForm onAddCustomer={addCustomer} />
            </CustomerTable>
        </div>
    </DashboardLayout>
  );
}
