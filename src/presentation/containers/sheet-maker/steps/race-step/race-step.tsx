import Button from "@/presentation/components/button/button.";
import Input from "@/presentation/components/input/input";
import useRaceStep from "./use-race-step";
import Select, { SelectOption } from "@/presentation/components/select/select";
import { useMemo, useState } from "react";
import { RaceDict } from "@/presentation/helpers/dicts";

interface NameStepProps {
  handleNextStep: () => void;
}

export default function RaceStep({ handleNextStep }: NameStepProps) {
  const { handleSubmit, ToastComponents, raceList } = useRaceStep({
    handleNextStep,
  });
  const [selectedRace, setSelectedRace] = useState<SelectOption>();
  const options = useMemo(
    () =>
      raceList
        ? raceList.map((race) => ({
            value: race.name,
            label: RaceDict[race.index],
          }))
        : null,
    [raceList]
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {options && (
        <Select
          label="Selecione uma raça"
          value={selectedRace}
          name="race"
          options={options}
          onChange={(value) => setSelectedRace(value)}
        />
      )}
      <Button>Continuar</Button>
      <ToastComponents />
    </form>
  );
}
