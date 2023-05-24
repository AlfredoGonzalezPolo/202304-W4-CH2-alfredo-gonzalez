import { useState } from "react";
import { Step1 } from "../components/step1/Step1";
import { Step2 } from "../components/step2/Step2";
import { Confirmation } from "../confirmacion/Confirmacion";
import { Login } from "../login/Login";

export function Form() {
  const [step, setStep] = useState<number>(1);

  return (
    <>
      <h2>Form</h2>

      {step === 1 && <Step1></Step1>}
      {step === 2 && <Step2></Step2>}
      {step === 3 && <Confirmation></Confirmation>}
      {step === 4 && <Login></Login>}
    </>
  );
}
