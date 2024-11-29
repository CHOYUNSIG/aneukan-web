import FormLayout from "@/ui/layout/form_layout";
import { LoginForm } from "./login_form";

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
