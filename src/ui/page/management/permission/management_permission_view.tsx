import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ManagementExceptionIndicator from "../management_exception_indicator";
import getAccessInfoList from "@/server/api/endpoint/get_access_info_list";
import { getMyInfo } from "@/server/api/endpoint/get_my_info";

export default async function ManagementPermissionView({ id }: { id: number }) {
  const me = await getMyInfo(id);
  if (!me) {
    return <ManagementExceptionIndicator message="권한이 없습니다." icon={faXmark} />;
  }

  const accessInfoList = await getAccessInfoList(me.id);

  if (!accessInfoList) {
    return <ManagementExceptionIndicator message="권한이 없습니다." icon={faXmark} />;
  }

  return (
    <div>
      <h1>열람 권한 요청</h1>
      {accessInfoList.filter((accessInfo) => !accessInfo.isAccessable).map((accessInfo) => (
        <div key={accessInfo.accessorId}>
          <p>{accessInfo.accessorId}</p>
        </div>
        ))}
      <h1>열람 권한 허용 목록</h1>
      {accessInfoList.filter((accessInfo) => accessInfo.isAccessable).map((accessInfo) => (
        <div key={accessInfo.accessorId}>
          <p>{accessInfo.accessorId}</p>
        </div>
        ))}
    </div>
  );
}
