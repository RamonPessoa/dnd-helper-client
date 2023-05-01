import { IRaceListItem } from "@/domain/usecases/race/get-race-list";
import { useToast } from "@/presentation/components/toast";
import { useRaceService } from "@/presentation/hooks/services/race-service";
import { useCallback, useEffect, useState } from "react";

interface UseNameStepProps {
  handleNextStep: () => void;
}

const useRaceStep = ({ handleNextStep }: UseNameStepProps) => {
  const { ToastComponents, showToast } = useToast();
  const [raceList, setRaceList] = useState<IRaceListItem[]>();
  const { raceService } = useRaceService();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = new FormData(event.currentTarget);
    const race = formValues.get("race") as string;
    if (!race) {
      showToast("race is required", "error", 3000);
      return;
    }
    handleNextStep();
  };

  const fetchRaceList = useCallback(async () => {
    const response = await raceService.remoteGetRaceList.getRaceList();
    if (response.error) {
      showToast(response.error, "error", 3000);
      return;
    }
    if (response.body) setRaceList(response.body.results);
  }, [raceService.remoteGetRaceList, showToast]);

  useEffect(() => {
    fetchRaceList();
  }, [fetchRaceList]);

  return {
    handleSubmit,
    ToastComponents,
    raceList,
  };
};

export default useRaceStep;
