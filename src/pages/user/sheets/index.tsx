import SheetMakerContextProvider from "@/presentation/containers/sheet-maker/sheet-maker-context";
import Style from "./sheets.module.css";
import { UserSheets } from "@features/user/user-sheets/components/user-sheets";

export default function UserPage() {
  return (
    <SheetMakerContextProvider>
      <div className={`${Style.container}`}>
        <UserSheets />
      </div>
    </SheetMakerContextProvider>
  );
}
