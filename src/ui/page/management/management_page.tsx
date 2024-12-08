import BannerLayout from "@/ui/layout/banner_layout";
import { ManagementBanner } from "./management_banner";
import { ManagementSidebar } from "./management_sidebar";
import ManagementPermissionView from "./permission/management_permission_view";
import ManagementInfoView from "./info/management_info_view";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import ManagementLogView from "./log/managerment_log_view";

export default function ManagementPage({
  searchParams,
  token,
}: {
  searchParams: { page?: string };
  token: string | undefined;
}) {
  if (token === undefined) {
    redirect("/login");
  }

  if (!["0", "1", "2"].includes(searchParams.page ?? "")) {
    redirect(`/management?page=0`);
  }

  return (
    <BannerLayout banner={<ManagementBanner />} bannerHeight="256px">
      <div className="flex flex-row w-full px-16 py-4 max-lg:flex-col max-lg:px-4">
        <ManagementSidebar
          labels={["사용자 정보", "열람 권한 관리", "로그 관리"]}
        />
        <Suspense fallback={<p>Loading...</p>}>
          {searchParams.page === "0" ? (
            <ManagementInfoView token={token} />
          ) : searchParams.page === "1" ? (
            <ManagementPermissionView token={token} />
          ) : searchParams.page === "2" ? (
            <ManagementLogView token={token} />
          ) : null}
        </Suspense>
      </div>
    </BannerLayout>
  );
}
