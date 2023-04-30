import Button from "@/presentation/components/button/button.";
import Input from "@/presentation/components/input/input";
import useNameStep from "./use-race-step";
import Select from "@/presentation/components/select/select";

interface NameStepProps {
  handleNextStep: () => void;
}

export default function RaceStep({ handleNextStep }: NameStepProps) {
  const { handleSubmit, ToastComponents } = useNameStep({ handleNextStep });
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Select
        label="Selecione uma raça"
        name="race"
        options={[
          { label: "Elfo", value: "elf" },
          { label: "Humano", value: "human" },
        ]}
      />
      <Button>Continuar</Button>
      <ToastComponents />
    </form>
  );
}
