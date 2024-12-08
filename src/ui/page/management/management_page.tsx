import BannerLayout from "@/ui/layout/banner_layout";
import { ManagementBanner } from "./management_banner";
import { ManagementSidebar } from "./management_sidebar";
import ManagementPermissionView from "./permission/management_permission_view";
import ManagementInfoView from "./info/management_info_view";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import ManagementLogView from "./log/managerment_log_view";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET!;

export default function ManagementPage({
  searchParams,
}: {
  searchParams: { page?: string; token?: string };
}) {
  const { page, token } = searchParams;

  if (!token) {
    redirect("/login");
  }

  try {
    jwt.verify(token, SECRET_KEY);
  } catch {
    redirect("/login");
  }

  const id = (jwt.decode(token) as { id: number }).id;

  if (!["0", "1", "2"].includes(page ?? "")) {
    redirect(`/management?page=0&token=${token}`);
  }

  return (
    <BannerLayout banner={<ManagementBanner />} bannerHeight="256px">
      <div className="flex flex-row w-full px-16 py-4 max-lg:flex-col max-lg:px-4">
        <ManagementSidebar
          labels={["사용자 정보", "열람 권한 관리", "로그 관리"]}
        />
        <Suspense fallback={<p>Loading...</p>}>
          {page === "0" ? (
            <ManagementInfoView id={id} />
          ) : page === "1" ? (
            <ManagementPermissionView id={id} />
          ) : page === "2" ? (
            <ManagementLogView id={id} />
          ) : null}
        </Suspense>
      </div>
    </BannerLayout>
  );
}
