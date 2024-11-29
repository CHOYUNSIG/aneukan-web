import FormLayout from "@/ui/layout/form_layout";

export default function RegisterPage() {
  return (
    <FormLayout
      title="홈캠 등록"
      subtitle="회원가입을 통해 홈캠을 등록합니다."
      totalStep={2}
      currentStep={0}
      form={<UserInformationForm />}
    />
  );
}

function UserInformationForm() {
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
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          회원가입
        </button>
      </div>
    </form>
  );
}

function UserAgreementForm() {
  return <div>hello register! this is form of the register page</div>;
}
