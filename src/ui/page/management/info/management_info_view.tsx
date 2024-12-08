import { getMyInfo } from "@/server/api/endpoint/get_my_info";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ManagementExceptionIndicator from "../management_exception_indicator";

export default async function ManagementInfoView({ id }: { id: number }) {
  const me = await getMyInfo(id);

  if (!me) {
    return (
      <ManagementExceptionIndicator
        message="유저 정보를 불러오는데 실패했습니다."
        icon={faUser}
      />
    );
  }

  return (
    <div className="flex flex-col w-full p-4 gap-4">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold text-lg">
          이름: <span className="text-gray-500">{me.name}</span>
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          수정
        </button>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold text-lg">
          아이디: <span className="text-gray-500">{me.userId}</span>
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          수정
        </button>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold text-lg">
          등록 시리얼 번호:{" "}
          <span className="text-gray-500">
            {me.serialNumber}
          </span>
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          수정
        </button>
      </div>
      <hr />
    </div>
  );
}
