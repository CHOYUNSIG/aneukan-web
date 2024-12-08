import { getMyInfo } from "@/server/api/endpoint/get_my_info";

export default async function ManagementInfoView({ token }: { token: string }) {
  const myInfo = await getMyInfo();

  return myInfo === null ? (
    <p>User not found</p>
  ) : (
    <div className="flex flex-col w-full p-4">
      <p className="font-bold">
        이름: <span className="text-gray-500">{myInfo.name}</span>
      </p>
      <p className="font-bold">
        이메일: <span className="text-gray-500">{myInfo.email}</span>
      </p>
    </div>
  );
}
