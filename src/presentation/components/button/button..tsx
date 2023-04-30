import { ButtonHTMLAttributes } from "react";
import Style from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <button
      className={`bg-blue-500 text-white rounded-md p-3 text-sm ${Style.button}`}
      {...rest}
    >
      {children}
    </button>
  );
}
