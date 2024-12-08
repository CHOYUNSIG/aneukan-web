import ManagementPage from "@/ui/page/management/management_page";
import { headers } from "next/headers";

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const resolvedParams = await searchParams;

  const headersList = await headers();

  const authorization = headersList.get("authorization");
  const token = authorization?.split(" ")[1];
  console.info(token);

  return (
    <ManagementPage
      searchParams={resolvedParams}
      token={token}
    />
  );
}
