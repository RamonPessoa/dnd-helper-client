import Input from "@/presentation/components/input/input";
import S from "../styles/user-signin-form.module.css";
import Button from "@/presentation/components/button/button.";
import useUserSigninForm from "../hooks/use-user-signin-form";

export default function UserSigninForm() {
  const { loadingLogin, ToastComponents, handleSubmit } = useUserSigninForm();

  return (
    <div
      className={`flex flex-col bg-white rounded-md gap-16 ${S.signin_form}`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input label="Usuário" name="name" />
        <Input label="Senha" type="password" name="password" />
        <Button loading={loadingLogin} className={S.signin__button}>Entrar</Button>
      </form>
      <ToastComponents />
    </div>
  );
}
