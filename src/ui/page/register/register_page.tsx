import FormLayout from "@/ui/layout/form_layout";
import { UserInformationForm } from "./user_information_form";

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
