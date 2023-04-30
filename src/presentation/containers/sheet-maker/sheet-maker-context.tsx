import { ISheet } from "@/domain/models/sheet";
import { createContext, useContext, useMemo, useState } from "react";

interface ISheetMakerContext {
  sheet?: ISheet;
  setSheet: (sheet: ISheet) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export const SheetMakerContext = createContext<ISheetMakerContext | null>(null);

interface SheetMakerContextProviderProps {
  children: React.ReactNode;
}

export default function SheetMakerContextProvider({
  children,
}: SheetMakerContextProviderProps) {
  const [sheet, setSheet] = useState<ISheet>();
  const [currentStep, setCurrentStep] = useState(0);

  const value = useMemo(
    () => ({ sheet, setSheet, currentStep, setCurrentStep }),
    [sheet, currentStep]
  );
  return (
    <SheetMakerContext.Provider value={value}>
      {children}
    </SheetMakerContext.Provider>
  );
}

export const useSheetMaker = () => {
  const context = useContext(SheetMakerContext);
  if (!context) {
    throw new Error(
      "useSheetMaker must be used within a SheetMakerContextProvider"
    );
  }
  return context;
};
