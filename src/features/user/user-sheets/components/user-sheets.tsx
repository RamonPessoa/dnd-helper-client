import SheetButton from "@/components/sheet-button/sheet-button";
import useUserSheets from "../hooks/use-user-sheets";
import Style from "../styles/user-sheets.module.css";

export function UserSheets() {
  const { handleOpenSheetMaker } =
    useUserSheets();

  return (
    <div className={`${Style.user__sheets}`}>
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
