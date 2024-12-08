import getLogList from "@/server/api/endpoint/get_log_list";
import { getMyInfo } from "@/server/api/endpoint/get_my_info";

export default async function ManagementLogView({ token }: { token: string }) {
  const myInfo = await getMyInfo();

  if (myInfo === null) {
    return <div>User not found</div>;
  }

  const logList = await getLogList(myInfo.id);

  return logList.length === 0 ? (
    <div>No logs</div>
  ) : (
    <div>ManagementLogView</div>
  );
}
