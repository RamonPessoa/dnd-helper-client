import Input from "@/presentation/components/input/input";
import S from "./signin-form.module.css";
import Button from "@/presentation/components/button/button.";
import { useToast } from "@/presentation/components/toast";
import { useEffect } from "react";
import useSigninForm from "./use-signin-form";

export default function SigninForm() {
  const { loading, ToastComponents, handleSubmit } = useSigninForm();

  return (
    <div
      className={`flex flex-col bg-white rounded-md gap-16 ${S.signin_form}`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input label="Usuário" name="name" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
      <ToastComponents />
    </div>
  );
}
