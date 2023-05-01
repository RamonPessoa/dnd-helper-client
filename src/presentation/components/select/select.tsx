import { SelectHTMLAttributes, useEffect, useState } from "react";
import Style from "./select.module.css";
import { AiFillCaretDown } from "react-icons/ai";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  label?: string;
  value: SelectOption | undefined;
  onChange: (value: SelectOption) => void;
  name?: string;
}

export default function Select({
  options,
  label,
  value,
  onChange,
  name,
}: SelectProps) {
  const [optionsOpen, setOptionsOpen] = useState(false);

  return (
    <div
      className={`${Style.select}`}
      onClick={() => setOptionsOpen((prev) => !prev)}
      onBlur={() => setOptionsOpen(false)}
      tabIndex={0}
    >
      <span className={`${Style.label}`}>{value ? value.label : label}</span>
      <ul className={`${Style.options} ${optionsOpen ? Style.show : ""}`}>
        {options.map((option) => {
          return (
            <li key={option.label} onClick={() => onChange(option)}>
              {option.label}
            </li>
          );
        })}
      </ul>
      <AiFillCaretDown
        className={`${Style["arrow-down"]} ${
          optionsOpen ? Style["arrow-up"] : ""
        }`}
      />
    </div>
  );
}
