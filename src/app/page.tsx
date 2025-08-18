import StatusLabel, { Status } from '@/app/components/status-lables';
import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-xl">Home page</h1>
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
        <AddCompanyButton />
      </main>
    </div>
  );
}
