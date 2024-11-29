"use client";

import { useState } from "react";

export function LoginForm({
  onSubmit,
}: {
  onSubmit: (id: string, password: string) => void;
}) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col gap-4 w-full max-sm:max-w-full">
      <div className="flex flex-col gap-2">
        <label htmlFor="id" className="font-medium">
          아이디
        </label>
        <input
          type="text"
          id="id"
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-medium">
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          onClick={() => {
            onSubmit(id, password);
          }}
        >
          로그인
        </button>
      </div>
    </form>
  );
}
