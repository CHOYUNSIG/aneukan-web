import { User } from "@/data/model/user";

export default function ManagementInfoView({
  userInfo,
}: {
  userInfo: User | undefined | null;
}) {
  return userInfo === undefined ? (
    <p>Loading...</p>
  ) : userInfo === null ? (
    <p>User not found</p>
  ) : (
    <div className="flex flex-col w-full p-4">
      <p className="font-bold">
        이름: <span className="text-gray-500">{userInfo?.name}</span>
      </p>
      <p className="font-bold">
        이메일: <span className="text-gray-500">{userInfo?.email}</span>
      </p>
    </div>
  );
}
