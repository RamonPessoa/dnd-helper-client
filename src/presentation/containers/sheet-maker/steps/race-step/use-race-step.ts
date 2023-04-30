import { useToast } from "@/presentation/components/toast";

interface UseNameStepProps {
  handleNextStep: () => void;
}

const useNameStep = ({ handleNextStep }: UseNameStepProps) => {
  const { ToastComponents, showToast } = useToast();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = new FormData(event.currentTarget);
    const name = formValues.get("race") as string;
    if (!name) {
      showToast("Name is required", "error", 3000);
      return;
    }
    handleNextStep();
  };

  return {
    handleSubmit,
    ToastComponents,
  };
};

export default useNameStep;
