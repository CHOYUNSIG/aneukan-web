import ManagementPage from "@/ui/page/management/management_page";

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string; token?: string };
}) {
  const resolvedParams = await searchParams;

  return (
    <ManagementPage
      searchParams={resolvedParams}
    />
  );
}
