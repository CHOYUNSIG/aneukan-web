import getLogList from "@/server/api/endpoint/get_log_list";

export default async function ManagementLogView({ id }: { id: number }) {
  const logList = await getLogList(id);

  return logList.length === 0 ? (
    <div>No logs</div>
  ) : (
    <div>ManagementLogView</div>
  );
}
