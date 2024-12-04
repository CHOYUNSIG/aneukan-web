"use client";

import FormLayout from "@/ui/layout/form_layout";
import { RegisterInformationForm } from "./register_information_form";
import { useState, useCallback } from "react";
import { RegisterAgreementForm } from "./register_agreement_form";
import { AuthProvider } from "@/client/context/auth_provider";
import { useAuth } from "@/client/hook/use_auth";

export default function RegisterPage() {
  return (
    <AuthProvider>
      <RegisterPageWithContext />
    </AuthProvider>
  );
}

function RegisterPageWithContext() {
  const { register } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [id, setId] = useState("");

  const handleUserInformationSubmit = useCallback(
    async (serialNumber: string, id: string, password: string) => {
      await register(serialNumber, id, password);
      setCurrentStep(1);
      setId(id);
    },
    [register]
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
