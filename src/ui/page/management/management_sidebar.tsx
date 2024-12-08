import { ManagementSidebarItem } from "./management_sidebar_item";

export function ManagementSidebar({ labels }: { labels: string[] }) {
  return (
    <div className="flex flex-col justify-center gap-4 px-4 py-16 max-lg:flex-row max-lg:py-4 max-sm:flex-col">
      {labels.map((label, index) => (
        <ManagementSidebarItem
          key={index}
          title={label}
          width="256px"
          destinationPage={index}
        />
      ))}
    </div>
  );
}
