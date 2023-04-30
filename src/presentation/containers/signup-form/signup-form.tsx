import Input from "@/presentation/components/input/input";
import S from "./signup-form.module.css";
import Button from "@/presentation/components/button/button.";
import useSignupForm from "./use-signup-form";
import { useToast } from "@/presentation/components/toast";
import { useEffect } from "react";

export default function SignupForm() {
  
  const { handleSubmit, loading, ToastComponents } =
    useSignupForm();

  return (
    <div
      className={`flex flex-col bg-white p-16 rounded-md gap-16 ${S.signup_form}`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          label="Usuário"
          name="name"
        />
        <Input
          label="Senha"
          type="password"
          name="password"
        />
        <Input
          label="Confirmar senha"
          type="password"
          name="confirmPassword"
        />
        <Button>Cadastrar-se</Button>
      </form>
      <ToastComponents />
    </div>
  );
}
