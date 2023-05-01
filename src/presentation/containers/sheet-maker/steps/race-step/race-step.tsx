import Button from "@/presentation/components/button/button.";
import Input from "@/presentation/components/input/input";
import useNameStep from "./use-race-step";
import Select, { SelectOption } from "@/presentation/components/select/select";
import { useState } from "react";

interface NameStepProps {
  handleNextStep: () => void;
}

export default function RaceStep({ handleNextStep }: NameStepProps) {
  const { handleSubmit, ToastComponents } = useNameStep({ handleNextStep });
  const [selectedRace, setSelectedRace] = useState<SelectOption>();
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Select
        label="Selecione uma raça"
        value={selectedRace}
        name="race"
        options={[
          { label: "Elfo", value: "elf" },
          { label: "Humano", value: "human" },
        ]}
        onChange={(value) => setSelectedRace(value)}
      />
      <Button>Continuar</Button>
      <ToastComponents />
    </form>
  );
}
