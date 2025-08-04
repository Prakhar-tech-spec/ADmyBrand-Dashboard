
'use client';

import { useState, useMemo } from 'react';
import { DateRange } from 'react-day-picker';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { CustomerTable } from '@/components/customers/customer-table';
import { Customer } from '@/components/customers/columns';
import { AddCustomerForm } from '@/components/customers/add-customer-form';
import { useAppToast } from '@/context/toaster-context';

const initialCustomerData: Customer[] = [
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
    {
        id: "CUST-004",
        name: "Alice Johnson",
        email: "alice.j@web.com",
        company: "Web Solutions",
        role: "Member",
        status: "Active",
        createdAt: "2024-06-15T14:00:00Z"
    },
    {
        id: "CUST-005",
        name: "Bob Brown",
        email: "bob.brown@mail.com",
        company: "Mail Services",
        role: "Member",
        status: "Active",
        createdAt: "2024-06-20T16:45:00Z"
    },
    {
        id: "CUST-006",
        name: "Charlie Davis",
        email: "charlie.d@email.com",
        company: "Email Corp",
        role: "Admin",
        status: "Inactive",
        createdAt: "2024-05-10T12:00:00Z"
    },
    {
        id: "CUST-007",
        name: "Diana Miller",
        email: "diana.m@service.com",
        company: "Service Pro",
        role: "Member",
        status: "Active",
        createdAt: "2024-05-25T08:30:00Z"
    },
    {
        id: "CUST-008",
        name: "Ethan Martinez",
        email: "ethan.m@solutions.com",
        company: "Solutions Inc.",
        role: "Owner",
        status: "Active",
        createdAt: "2024-04-01T18:00:00Z"
    },
    {
        id: "CUST-009",
        name: "Fiona Garcia",
        email: "fiona.g@tech.net",
        company: "Tech Net",
        role: "Member",
        status: "Active",
        createdAt: "2024-04-12T13:20:00Z"
    },
    {
        id: "CUST-010",
        name: "George Rodriguez",
        email: "george.r@web.org",
        company: "Web Org",
        role: "Member",
        status: "Inactive",
        createdAt: "2024-03-05T11:10:00Z"
    },
    {
        id: "CUST-011",
        name: "Hannah White",
        email: "hannah.w@example.com",
        company: "Data Dynamics",
        role: "Admin",
        status: "Active",
        createdAt: "2024-07-05T10:00:00Z"
    },
    {
        id: "CUST-012",
        name: "Ian Green",
        email: "ian.g@innovate.com",
        company: "Innovate LLC",
        role: "Member",
        status: "Active",
        createdAt: "2024-07-06T11:30:00Z"
    },
    {
        id: "CUST-013",
        name: "Jack Black",
        email: "jack.b@tech.co",
        company: "Tech Co",
        role: "Member",
        status: "Active",
        createdAt: "2024-07-07T09:00:00Z"
    },
    {
        id: "CUST-014",
        name: "Karen Hill",
        email: "karen.h@web.com",
        company: "Web Solutions",
        role: "Owner",
        status: "Inactive",
        createdAt: "2024-06-18T14:00:00Z"
    },
    {
        id: "CUST-015",
        name: "Leo King",
        email: "leo.k@mail.com",
        company: "Mail Services",
        role: "Member",
        status: "Active",
        createdAt: "2024-06-22T16:45:00Z"
    },
    {
        id: "CUST-016",
        name: "Mia Wright",
        email: "mia.w@email.com",
        company: "Email Corp",
        role: "Admin",
        status: "Active",
        createdAt: "2024-05-13T12:00:00Z"
    },
    {
        id: "CUST-017",
        name: "Noah Scott",
        email: "noah.s@service.com",
        company: "Service Pro",
        role: "Member",
        status: "Inactive",
        createdAt: "2024-05-28T08:30:00Z"
    },
    {
        id: "CUST-018",
        name: "Olivia Adams",
        email: "olivia.a@solutions.com",
        company: "Solutions Inc.",
        role: "Member",
        status: "Active",
        createdAt: "2024-04-05T18:00:00Z"
    },
    {
        id: "CUST-019",
        name: "Peter Nelson",
        email: "peter.n@tech.net",
        company: "Tech Net",
        role: "Owner",
        status: "Active",
        createdAt: "2024-04-15T13:20:00Z"
    },
    {
        id: "CUST-020",
        name: "Quinn Carter",
        email: "quinn.c@web.org",
        company: "Web Org",
        role: "Member",
        status: "Active",
        createdAt: "2024-03-08T11:10:00Z"
    },
    {
        id: "CUST-021",
        name: "Rachel Mitchell",
        email: "rachel.m@example.com",
        company: "Example Inc.",
        role: "Member",
        status: "Inactive",
        createdAt: "2024-07-08T10:00:00Z"
    },
    {
        id: "CUST-022",
        name: "Steve Turner",
        email: "steve.t@innovate.com",
        company: "Innovate LLC",
        role: "Admin",
        status: "Active",
        createdAt: "2024-07-09T11:30:00Z"
    },
    {
        id: "CUST-023",
        name: "Tina Phillips",
        email: "tina.p@tech.co",
        company: "Tech Co",
        role: "Member",
        status: "Active",
        createdAt: "2024-07-10T09:00:00Z"
    },
    {
        id: "CUST-024",
        name: "Uma Kumar",
        email: "uma.k@web.com",
        company: "Web Solutions",
        role: "Owner",
        status: "Active",
        createdAt: "2024-06-25T14:00:00Z"
    },
    {
        id: "CUST-025",
        name: "Victor Perez",
        email: "victor.p@mail.com",
        company: "Mail Services",
        role: "Member",
        status: "Inactive",
        createdAt: "2024-06-28T16:45:00Z"
    },
    {
        id: "CUST-026",
        name: "Wendy Rogers",
        email: "wendy.r@email.com",
        company: "Email Corp",
        role: "Member",
        status: "Active",
        createdAt: "2024-05-18T12:00:00Z"
    },
    {
        id: "CUST-027",
        name: "Xander Hall",
        email: "xander.h@service.com",
        company: "Service Pro",
        role: "Admin",
        status: "Active",
        createdAt: "2024-05-30T08:30:00Z"
    },
    {
        id: "CUST-028",
        name: "Yara Reed",
        email: "yara.r@solutions.com",
        company: "Solutions Inc.",
        role: "Member",
        status: "Inactive",
        createdAt: "2024-04-08T18:00:00Z"
    },
    {
        id: "CUST-029",
        name: "Zane Cook",
        email: "zane.c@tech.net",
        company: "Tech Net",
        role: "Owner",
        status: "Active",
        createdAt: "2024-04-20T13:20:00Z"
    },
    {
        id: "CUST-030",
        name: "Ava Morgan",
        email: "ava.m@web.org",
        company: "Web Org",
        role: "Member",
        status: "Active",
        createdAt: "2024-03-12T11:10:00Z"
    },
    {
        id: "CUST-031",
        name: "Ben Bailey",
        email: "ben.b@example.com",
        company: "Example Inc.",
        role: "Member",
        status: "Active",
        createdAt: "2024-07-11T10:00:00Z"
    },
    {
        id: "CUST-032",
        name: "Chloe Cooper",
        email: "chloe.c@innovate.com",
        company: "Innovate LLC",
        role: "Admin",
        status: "Inactive",
        createdAt: "2024-07-12T11:30:00Z"
    },
    {
        id: "CUST-033",
        name: "David Gray",
        email: "david.g@tech.co",
        company: "Tech Co",
        role: "Member",
        status: "Active",
        createdAt: "2024-07-13T09:00:00Z"
    },
    {
        id: "CUST-034",
        name: "Ella Price",
        email: "ella.p@web.com",
        company: "Web Solutions",
        role: "Owner",
        status: "Active",
        createdAt: "2024-06-28T14:00:00Z"
    },
    {
        id: "CUST-035",
        name: "Frank Howard",
        email: "frank.h@mail.com",
        company: "Mail Services",
        role: "Member",
        status: "Active",
        createdAt: "2024-06-30T16:45:00Z"
    },
    {
        id: "CUST-036",
        name: "Grace Ward",
        email: "grace.w@email.com",
        company: "Email Corp",
        role: "Member",
        status: "Inactive",
        createdAt: "2024-05-22T12:00:00Z"
    },
    {
        id: "CUST-037",
        name: "Henry Brooks",
        email: "henry.b@service.com",
        company: "Service Pro",
        role: "Admin",
        status: "Active",
        createdAt: "2024-05-31T08:30:00Z"
    },
    {
        id: "CUST-038",
        name: "Isla Watson",
        email: "isla.w@solutions.com",
        company: "Solutions Inc.",
        role: "Member",
        status: "Active",
        createdAt: "2024-04-10T18:00:00Z"
    },
    {
        id: "CUST-039",
        name: "Jake Edwards",
        email: "jake.e@tech.net",
        company: "Tech Net",
        role: "Owner",
        status: "Inactive",
        createdAt: "2024-04-25T13:20:00Z"
    },
    {
        id: "CUST-040",
        name: "Lily Bennett",
        email: "lily.b@web.org",
        company: "Web Org",
        role: "Member",
        status: "Active",
        createdAt: "2024-03-15T11:10:00Z"
    }
];

export default function CustomersPage() {
    const [customers, setCustomers] = useState<Customer[]>(initialCustomerData);
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
    const { toasterRef } = useAppToast();

    const addCustomer = (customer: Omit<Customer, 'id' | 'createdAt'>) => {
        const newCustomer: Customer = {
            id: `CUST-${String(customers.length + 1).padStart(3, '0')}`,
            createdAt: new Date().toISOString(),
            ...customer
        };
        setCustomers(prevCustomers => [newCustomer, ...prevCustomers]);
    }

    const deleteCustomer = (customerId: string) => {
        setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== customerId));
        toasterRef.current?.show({
            title: "Customer Deleted",
            message: `Customer ${customerId} has been successfully deleted.`,
            variant: "success",
        });
    }

    const filteredCustomers = useMemo(() => {
        if (!dateRange || (!dateRange.from && !dateRange.to)) {
          return customers;
        }
        return customers.filter(customer => {
          const customerDate = new Date(customer.createdAt);
          const from = dateRange.from ? new Date(dateRange.from) : null;
          const to = dateRange.to ? new Date(dateRange.to) : null;
    
          if (from && to) {
            // Set 'to' date to the end of the day
            to.setHours(23, 59, 59, 999);
            return customerDate >= from && customerDate <= to;
          }
          if (from) {
            return customerDate >= from;
          }
          if (to) {
            to.setHours(23, 59, 59, 999);
            return customerDate <= to;
          }
          return true;
        });
      }, [customers, dateRange]);

  return (
    <DashboardLayout
      title="Customers"
      subtitle="Here's a list of your customers."
    >
        <div className="rounded-3xl border bg-card text-card-foreground shadow-sm">
            <CustomerTable data={filteredCustomers} onDateChange={setDateRange} onDelete={deleteCustomer}>
                <AddCustomerForm onAddCustomer={addCustomer} />
            </CustomerTable>
        </div>
    </DashboardLayout>
  );
}
