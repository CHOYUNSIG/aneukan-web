import BannerLayout from "@/ui/layout/banner_layout";
import { ManagementBanner } from "./management_banner";
import { ManagementSidebar } from "./management_sidebar";
import ManagementPermissionView from "./management_permission_view";
import ManagementInfoView from "./management_info_view";
import { redirect } from "next/navigation";

export default function ManagementPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  if (!["0", "1"].includes(searchParams.page ?? "")) {
    redirect(`/management?page=0`);
  }

  return (
    <BannerLayout banner={<ManagementBanner />} bannerHeight="256px">
      <div className="flex flex-row w-full px-16 py-4 max-lg:flex-col max-lg:px-4">
        <ManagementSidebar />
        {searchParams.page === "0" ? (
          <ManagementInfoView userInfo={null} />
        ) : (
          <ManagementPermissionView />
        )}
      </div>
    </BannerLayout>
  );
}
