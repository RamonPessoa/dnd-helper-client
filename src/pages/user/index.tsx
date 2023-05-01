import Avatar from "@/presentation/components/avatar/avatar";
import Button from "@/presentation/components/button/button.";
import Modal from "@/presentation/components/modal/modal";
import SheetButton from "@/presentation/components/sheet-button/sheet-button";
import SheetMaker from "@/presentation/containers/sheet-maker/sheet-maker";
import SheetMakerContextProvider from "@/presentation/containers/sheet-maker/sheet-maker-context";
import { useRaceService } from "@/presentation/hooks/services/race-service";
import { useEffect, useState } from "react";

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
      <SheetMakerContextProvider>
        <SheetMaker open={isSheetMakerOpen} onClose={handleCloseSheetMaker} />
      </SheetMakerContextProvider>
      <SheetButton onClick={handleOpenSheetMaker}/>
    </>
  );
}
