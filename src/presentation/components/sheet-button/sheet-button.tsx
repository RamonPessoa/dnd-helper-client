import PlusIcon from "@/assets/icons/plusIcon.svg";
import Image from "next/image";
import Style from "./sheet-button.module.css";
import { ButtonHTMLAttributes } from "react";

interface SheetButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  avatar?: string;
  sheetId?: string;
}

export default function SheetButton({
  avatar,
  sheetId,
  ...props
}: SheetButtonProps) {
  return (
    <button
      className={`${Style.button} ${!avatar ? Style.add : ""}`}
      {...props}
    >
      {!avatar ? (
        <Image src={PlusIcon} width={30} height={30} alt="" />
      ) : (
        <div className={`${Style.summary}`}>
          <Image
            src={avatar}
            alt=""
            width={60}
            height={60}
            className="rounded-full"
          />
          <span>teste</span>
        </div>
      )}
    </button>
  );
}
