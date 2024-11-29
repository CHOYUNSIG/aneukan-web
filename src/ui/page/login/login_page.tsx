"use client";

import FormLayout from "@/ui/layout/form_layout";
import { LoginForm } from "./login_form";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSubmit = useCallback(
    (id: string, password: string) => {
      console.log(id, password);
      router.push("/");
    },
    [router]
  );

  return (
    <FormLayout
      title="로그인"
      subtitle="홈캠 회원으로서 로그인합니다."
      totalStep={1}
      currentStep={0}
      form={<LoginForm onSubmit={handleLoginSubmit} />}
    />
  );
}
