import Modal from "@/presentation/components/modal/modal";
import Style from "./sheet-maker.module.css";
import NameStep from "./steps/name-step/name-step";
import { useSheetMaker } from "./sheet-maker-context";
import RaceStep from "./steps/race-step/race-step";

interface SheetMakerProps {
  open: boolean;
  onClose: () => void;
}

export default function SheetMaker({ open, onClose }: SheetMakerProps) {
  const { currentStep, setCurrentStep } = useSheetMaker();

  return (
    <Modal open={open} onClose={onClose}>
      <div
        className={`${Style.modal_content} rounded-md pt-5 p-10 flex flex-col gap-10`}
      >
        <h1 className="text-lg font-bold text-center">Criação de ficha</h1>
        {currentStep === 0 && (
          <NameStep handleNextStep={() => setCurrentStep(1)} />
        )}
        {currentStep === 1 && (
          <RaceStep handleNextStep={() => setCurrentStep(2)}/>
        )}
      </div>
    </Modal>
  );
}
