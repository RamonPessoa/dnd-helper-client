import SheetMakerContextProvider from "@/presentation/containers/sheet-maker/sheet-maker-context";
import Style from "./sheets.module.css";
import { UserSheets } from "@/presentation/containers/user-sheets/user-sheets";

export default function UserPage() {
  return (
    <SheetMakerContextProvider>
      <div className={`${Style.container}`}>
        <UserSheets />
      </div>
    </SheetMakerContextProvider>
  );
}
