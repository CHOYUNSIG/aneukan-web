"use client";

import { useRouter } from "next/navigation";

export function RegisterAgreementForm({ id }: { id: string }) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 w-full max-sm:max-w-full">
      <p className="flex flex-row gap-1 items-baseline">
        <span className="font-bold text-xl">{id}</span>님,
      </p>
      <p>회원 가입이 완료되었습니다.</p>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          onClick={() => {
            router.push("/login");
          }}
        >
          로그인으로
        </button>
      </div>
    </div>
  );
}
