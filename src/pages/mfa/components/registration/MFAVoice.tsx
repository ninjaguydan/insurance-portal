import React, { useContext, useEffect, useState } from "react";

import SvgPhone from "src/assets/icons/SvgPhone";

import MFAPEnterPhoneForm from "src/components/forms/MFAEnterPhoneForm";
import MFAPasscodeVoiceForm from "src/components/forms/MFAPasscodeVoiceForm";
import Loader from "src/components/loaders/generalLoader/Loader";

import { StepContext } from "src/pages/registration/Registration";

import { ContactInfo } from "src/utils/interfaces/registration/IContactInfo";
import { COMPLETE } from "src/utils/interfaces/registration/IRegistrationSteps";

import { CancelContext } from "./MFASetup";

type MFAVoiceProps = {
  contact: ContactInfo;
  onRedirect: () => void;
};

export default function MFAVoice({ contact, onRedirect }: MFAVoiceProps) {
  const [passcode, setPasscode] = useState<string | null>(null);
  const [defaultCode, setDefaultCode] = useState<string | undefined>(undefined);
  const [passcodeReady, setPasscodeReady] = useState(false);
  const [loadingStep, setLoadingStep] = useState(false);
  const [resendOtpAction, setResendOtpAction] = useState(false);

  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState<string | null>(null);
  const [error, setError] = useState("");

  const setCurrentStep = useContext(StepContext)!;

  const onCancel = useContext(CancelContext);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingStep(true);
    setTimeout(() => {
      setLoadingStep(false);
      setPasscodeReady(true);
    }, 1000);
  };

  const handleSendOtp = () => setResendOtpAction(true);

  const handleFinish = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoadingStep(true);
    setTimeout(() => {
      setLoadingStep(false);
      setCurrentStep(COMPLETE);
    }, 1000);
  };

  useEffect(() => {
    if (resendOtpAction) {
      const timeout = setTimeout(() => {
        setResendOtpAction(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [resendOtpAction]);

  return (
    <div className="method sms">
      {loadingStep && <Loader />}

      <header className="method-header">
        <SvgPhone />
        <h2>Voice</h2>
      </header>
      {!passcodeReady ? (
        <MFAPEnterPhoneForm
          handleNext={handleNext}
          handleCancel={onCancel}
          setValue={setNumber}
          value={number}
          defaultNum={contact.phone}
          onRedirect={onRedirect}
        />
      ) : (
        <MFAPasscodeVoiceForm
          setCode={setPasscode}
          code={passcode}
          loginMfaStatus={"EXISTING"}
          defaultCode={defaultCode}
          phone={phone}
          handleResend={handleSendOtp}
          resentPasscode={resendOtpAction}
          devicesForAuth={[]}
          handleChangeMethod={() => onCancel()}
          onFinish={handleFinish}
          passCodeError={error}
          onRedirect={onRedirect}
        />
      )}
    </div>
  );
}
