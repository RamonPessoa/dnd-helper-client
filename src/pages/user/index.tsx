import SheetButton from "@/components/sheet-button/sheet-button";
import { useState } from "react";

export default function UserPage() {
  const [isSheetMakerOpen, setIsSheetMakerOpen] = useState(false);

  const handleCloseSheetMaker = () => {
    setIsSheetMakerOpen(false);
  };

  const handleOpenSheetMaker = () => {
    setIsSheetMakerOpen(true);
  };
  return (
    <>
      <SheetButton onClick={handleOpenSheetMaker}/>
    </>
  );
}
