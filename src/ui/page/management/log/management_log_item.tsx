import { Log } from "@/data/model/log";
import { ManagementLogItemButton } from "./management_log_item_button";

export default function ManagementLogItem({ log }: { log: Log }) {
  const { timestamp } = log;

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="w-fit">
        <p className="text-sm">
          {`${timestamp.getFullYear()}년 ${
            timestamp.getMonth() + 1
          }월 ${timestamp.getDate()}일 ${timestamp.getHours()}시 ${timestamp.getMinutes()}분 ${timestamp.getSeconds()}초`}
        </p>
      </div>
      <ManagementLogItemButton />
    </div>
  );
}
