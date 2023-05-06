import { ButtonHTMLAttributes } from "react";
import Style from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button(props: ButtonProps) {
  const { children, className, loading, ...rest } = props;
  return (
    <button
      className={`${Style.button} ${
        loading ? Style.disabled : ""
      } ${className}`}
      {...rest}
      disabled={loading}
    >
      {!loading ? children : "carregando..."}
    </button>
  );
}
