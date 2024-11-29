"use client";

import { useState } from "react";

export function UserInformationForm({
  onSubmit,
}: {
  onSubmit: (serialNumber: string, id: string, password: string) => void;
}) {
  const [serialNumber, setSerialNumber] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  return (
    <form className="flex flex-col gap-4 w-full max-sm:max-w-full">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <label htmlFor="serialNumber" className="font-medium">
            홈캠 시리얼 번호
          </label>
          <button
            type="button"
            className="bg-black text-white w-6 h-6 rounded-full hover:bg-gray-800 transition-colors"
          >
            ?
          </button>
        </div>
        <input
          type="text"
          id="serialNumber"
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="시리얼 번호를 입력해주세요"
          value={serialNumber}
          onChange={(e) => {
            setSerialNumber(e.target.value);
          }}
        />
      </div>
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
          onChange={(e) => {
            setId(e.target.value);
          }}
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
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="passwordCheck" className="font-medium">
          비밀번호 확인
        </label>
        <input
          type="password"
          id="passwordCheck"
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="비밀번호를 입력해주세요"
          value={passwordCheck}
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          onClick={() => {
            if (password !== passwordCheck) {
              alert("비밀번호가 일치하지 않습니다.");
              return;
            }
            onSubmit(serialNumber, id, password);
          }}
        >
          회원가입
        </button>
      </div>
    </form>
  );
}
