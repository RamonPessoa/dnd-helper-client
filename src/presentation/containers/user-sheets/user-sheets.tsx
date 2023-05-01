import SheetButton from "@/presentation/components/sheet-button/sheet-button";
import useUserSheets from "./use-user-sheets";
import SheetMaker from "../sheet-maker/sheet-maker";
import Style from "./user-sheets.module.css";

export function UserSheets() {
  const { isSheetMakerOpen, handleOpenSheetMaker, handleCloseSheetMaker } =
    useUserSheets();

  return (
    <div className={`${Style.user__sheets}`}>
      <SheetMaker open={isSheetMakerOpen} onClose={handleCloseSheetMaker} />
      <SheetButton onClick={handleOpenSheetMaker} />
      <SheetButton avatar={"https://picsum.photos/200/200"} />
      <SheetButton avatar={"https://picsum.photos/200/200"} />
      <SheetButton avatar={"https://picsum.photos/200/200"} />
      <SheetButton avatar={"https://picsum.photos/200/200"} />
      <SheetButton avatar={"https://picsum.photos/200/200"} />
      <SheetButton avatar={"https://picsum.photos/200/200"} />
      <SheetButton avatar={"https://picsum.photos/200/200"} />
    </div>
  );
}
