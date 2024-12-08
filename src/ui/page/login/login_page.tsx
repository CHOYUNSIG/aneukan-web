"use client";

import FormLayout from "@/ui/layout/form_layout";
import { LoginForm } from "./login_form";
import { useCallback } from "react";
import { useAuth } from "@/client/hook/use_auth";
import { AxiosError } from "axios";

export default function LoginPage() {
  const { login, redirectWithAuth } = useAuth();

  const handleLoginSubmit = useCallback(
    async (id: string, password: string) => {
      try {
        await login(id, password);
        await redirectWithAuth("/management");
      } catch (error) {
        if (error instanceof AxiosError) {
          switch (error.response?.status) {
            case 401:
              alert("아이디 또는 비밀번호가 일치하지 않습니다.");
              break;
            case 404:
              alert("존재하지 않는 아이디입니다.");
              break;
            default:
              alert("알 수 없는 오류가 발생했습니다.");
              break;
          }
        }
      }
    },
    [redirectWithAuth, login]
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
