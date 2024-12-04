"use client";

import FormLayout from "@/ui/layout/form_layout";
import { LoginForm } from "./login_form";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { AuthProvider } from "@/client/context/auth_provider";
import { useAuth } from "@/client/hook/use_auth";

export default function LoginPage() {
  return (
    <AuthProvider>
      <LoginPageWithContext />
    </AuthProvider>
  );
}

function LoginPageWithContext() {
  const router = useRouter();
  const { login } = useAuth();

  const handleLoginSubmit = useCallback(
    async (id: string, password: string) => {
      await login(id, password);
      router.push("/");
    },
    [router, login]
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
