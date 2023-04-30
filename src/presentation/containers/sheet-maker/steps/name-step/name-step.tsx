import Button from "@/presentation/components/button/button.";
import Input from "@/presentation/components/input/input";
import useNameStep from "./use-name-step";

interface NameStepProps {
  handleNextStep: () => void;
}

export default function NameStep({ handleNextStep }: NameStepProps) {
  const { handleSubmit, ToastComponents } = useNameStep({ handleNextStep });
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Nome do personagem" name="name" />
      <Button>Continuar</Button>
      <ToastComponents />
    </form>
  );
}
