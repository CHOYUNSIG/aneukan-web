import { ManagementSidebarItem } from "./management_sidebar_item";

export function ManagementSidebar() {
  return (
    <div className="flex flex-col justify-center gap-4 px-4 py-16 max-lg:flex-row max-lg:py-4 max-sm:flex-col">
      {Array.from({ length: 2 }, (_, index) => (
        <ManagementSidebarItem
          key={index}
          title={index === 0 ? "사용자 정보" : "열람 권한 관리"}
          width="256px"
          destinationPage={index}
        />
      ))}
    </div>
  );
}
