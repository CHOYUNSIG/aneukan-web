import FormLayout from "@/ui/layout/form_layout";

export default function LoginPage() {
  return (
    <FormLayout
      title="Login"
      subtitle="Please enter your email and password to login"
      totalStep={2}
      currentStep={0}
      form={<div>hello login! this is form of the login page</div>}
    />
  );
}
