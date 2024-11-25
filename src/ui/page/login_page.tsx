import FormLayout from "@/ui/layout/form_layout";

export default function LoginPage() {
  return (
    <FormLayout
      title="로그인"
      subtitle="홈캠 회원으로서 로그인합니다."
      totalStep={1}
      currentStep={0}
      form={<LoginForm />}
    />
  );
}

function LoginForm() {
  return (
    <form className="flex flex-col gap-4 min-w-[320px]">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-medium">
          아이디
        </label>
        <input
          type="email"
          id="email"
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
      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          로그인
        </button>
      </div>
    </form>
  );
}
