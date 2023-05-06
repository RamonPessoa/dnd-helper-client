import { useState } from "react";

export default function useUserSheets() {
  const [isSheetMakerOpen, setIsSheetMakerOpen] = useState(false);

  const handleCloseSheetMaker = () => {
    setIsSheetMakerOpen(false);
  };

  const handleOpenSheetMaker = () => {
    setIsSheetMakerOpen(true);
  };

  return {
    isSheetMakerOpen,
    handleCloseSheetMaker,
    handleOpenSheetMaker,
  };
}
