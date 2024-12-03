"use client";

import BannerLayout from "@/ui/layout/banner_layout";
import { ManagementBanner } from "./management_banner";
import { ManagementSidebar } from "./management_sidebar";
import { useState } from "react";
import ManagementPermissionView from "./management_permission_view";
import ManagementInfoView from "./management_info_view";

export default function ManagementPage() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <BannerLayout banner={<ManagementBanner />} bannerHeight="256px">
      <div className="flex flex-row w-full px-16 py-4 max-lg:flex-col max-lg:px-4">
        <ManagementSidebar
          currentPage={currentPage}
          onClick={(page) => setCurrentPage(page)}
        />
        {currentPage === 0 ? (
          <ManagementInfoView />
        ) : (
          <ManagementPermissionView />
        )}
      </div>
    </BannerLayout>
  );
}
