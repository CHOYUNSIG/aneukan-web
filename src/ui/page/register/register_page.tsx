"use client";

import FormLayout from "@/ui/layout/form_layout";
import { RegisterInformationForm } from "./register_information_form";
import { useState, useCallback } from "react";
import { RegisterAgreementForm } from "./register_agreement_form";
import register from "@/client/api/endpoint/register";
import { AxiosError } from "axios";

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [id, setId] = useState("");

  const handleUserInformationSubmit = useCallback(
    async (
      serialNumber: string,
      id: string,
      name: string,
      password: string,
      passwordConfirm: string
    ) => {
      if (password !== passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      try {
        await register(serialNumber, id, name, password);
        setCurrentStep(1);
        setId(id);
      } catch (error) {
        if (error instanceof AxiosError) {
          switch (error.response?.status) {
            case 400:
              alert("이미 등록된 홈캠입니다.");
              break;
            default:
              alert("알 수 없는 오류가 발생했습니다.");
              break;
          }
        }
      }
    },
    []
  );

  return (
    <FormLayout
      title="홈캠 등록"
      subtitle="회원가입을 통해 홈캠을 등록합니다."
      totalStep={2}
      currentStep={currentStep}
      form={
        currentStep === 0 ? (
          <RegisterInformationForm onSubmit={handleUserInformationSubmit} />
        ) : (
          <RegisterAgreementForm id={id} />
        )
      }
    />
  );
}
