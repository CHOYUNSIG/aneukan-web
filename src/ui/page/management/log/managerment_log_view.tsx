import getLogList from "@/server/api/endpoint/get_log_list";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import ManagementExceptionIndicator from "../management_exception_indicator";
import ManagementLogItem from "./management_log_item";

export default async function ManagementLogView({ id }: { id: number }) {
  const logList = await getLogList(id);

  return logList.length === 0 ? (
    <ManagementExceptionIndicator message="로그가 없습니다." icon={faServer} />
  ) : (
    <div className="flex flex-col gap-8 p-4 w-full">
      <h2 className="text-xl font-bold">낙상 기록</h2>
      <div className="flex flex-col gap-4">
        {Array.from({ length: logList.length * 2 - 1 }, (_, index) =>
          index % 2 === 0 ? (
            <ManagementLogItem key={index} log={logList[index / 2]} />
          ) : (
            <hr key={index} className="w-full" />
          )
        )}
      </div>
    </div>
  );
}
