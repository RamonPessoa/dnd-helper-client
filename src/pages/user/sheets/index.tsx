import Style from "./sheets.module.css";
import { UserSheets } from "@/features/user/user-sheets/components/user-sheets";

export default function UserPage() {
  return (
    <div className={`${Style.container}`}>
      <UserSheets />
    </div>
  );
}
