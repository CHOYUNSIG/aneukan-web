"use client";

import FormLayout from "@/ui/layout/form_layout";
import { UserInformationForm } from "./user_information_form";
import { useState, useCallback } from "react";
import { UserAgreementForm } from "./user_agreement_form";

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [id, setId] = useState("");

  const handleUserInformationSubmit = useCallback(
    (serialNumber: string, id: string, password: string) => {
      console.log(serialNumber, id, password);
      setCurrentStep(1);
      setId(id);
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
          <UserInformationForm onSubmit={handleUserInformationSubmit} />
        ) : (
          <UserAgreementForm id={id} />
        )
      }
    />
  );
}
