
import { ManagementBannerLogoutButton } from "./management_banner_router_button";

export function ManagementBanner() {
  return (
    <div className="flex flex-row gap-8 justify-between w-full px-4 max-sm:flex-col">
      <div className="flex flex-col gap-2 justify-end h-full text-white drop-shadow-lg">
        <h1 className="text-5xl font-bold">관리</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 max-sm:w-full max-sm:items-end">
        <ManagementBannerLogoutButton />
      </div>
    </div>
  );
}
