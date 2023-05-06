import { InputHTMLAttributes, useRef, useState } from "react";
import Style from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input(props: InputProps) {
  const { label, ...rest } = props;
  return (
    <div className={`flex flex-col gap-1 w-full ${Style.input}`}>
      <input
        className="border-none outline-none"
        placeholder=" "
        {...rest}
      />
      {label && (
        <label
          className={`font-bold ${Style.label}`}
          htmlFor={rest.id}
        >
          {label}
        </label>
      )}
    </div>
  );
}
