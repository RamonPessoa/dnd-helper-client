import Input from "@/presentation/components/input/input";
import S from "./signup-form.module.css";
import Button from "@/presentation/components/button/button.";
import Tabs from "@/presentation/components/tabs/tabs";
import useSignupForm from "./use-signup-form";

export default function SignupForm() {
  const { error, handleSubmit, loading, success, clearError, clearSuccess } =
    useSignupForm();

  return (
    <div
      className={`flex flex-col bg-white p-16 rounded-md gap-16 ${S.signup_form}`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          onChange={() => {
            clearError();
            clearSuccess();
          }}
          label="Usuário"
          name="name"
        />
        <Input
          onChange={() => {
            clearError();
            clearSuccess();
          }}
          label="Senha"
          type="password"
          name="password"
        />
        <Input
          onChange={() => {
            clearError();
            clearSuccess();
          }}
          label="Confirmar senha"
          type="password"
          name="confirmPassword"
        />
        {error && <p className="text-red-500">{error}</p>}
        {success && (
          <p className="text-green-500">Usuário cadastrado com sucesso</p>
        )}
        <Button>Cadastrar-se</Button>
      </form>
    </div>
  );
}
