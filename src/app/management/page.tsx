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
  console.info(authorization);

  return <ManagementPage searchParams={resolvedParams} />;
}
