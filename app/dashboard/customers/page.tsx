import { customers } from '@/app/lib/placeholder-data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';


  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
