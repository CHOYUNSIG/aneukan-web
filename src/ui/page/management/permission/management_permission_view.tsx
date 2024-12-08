import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ManagementExceptionIndicator from "../management_exception_indicator";
import getAccessorList from "@/server/api/endpoint/get_accessor_list";
import { getMyInfo } from "@/server/api/endpoint/get_my_info";

export default async function ManagementPermissionView({ id }: { id: number }) {
  const me = await getMyInfo(id);
  if (!me) {
    return <ManagementExceptionIndicator message="권한이 없습니다." icon={faXmark} />;
  }

  const accessorList = await getAccessorList(me.userId);

  if (!accessorList) {
    return <ManagementExceptionIndicator message="권한이 없습니다." icon={faXmark} />;
  }

  return (
    <div>
      <h1>열람 권한 요청</h1>
      {accessorList.filter((accessor) => !accessor.isPermitted).map((accessor) => (
        <div key={accessor.id}>
          <p>{accessor.id}</p>
        </div>
        ))}
      <h1>열람 권한 허용 목록</h1>
      {accessorList.filter((accessor) => accessor.isPermitted).map((accessor) => (
        <div key={accessor.id}>
          <p>{accessor.id}</p>
        </div>
        ))}
    </div>
  );
}
