import { SelectHTMLAttributes, useEffect, useState } from "react";
import Style from "./select.module.css";
import { AiFillCaretDown } from "react-icons/ai";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string;
}

export default function Select({ options, label, ...props }: SelectProps) {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption>();

  const handleSelectOption = (option: SelectOption) => {
    setSelectedOption(option);
    setOptionsOpen(false);
  };

  // select with wheel
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      if (!selectedOption) {
        setSelectedOption(options[0]);
      } else {
        const index = options.findIndex(
          (option) => option.value === selectedOption.value
        );
        if (index < options.length - 1) {
          setSelectedOption(options[index + 1]);
        } else {
          setSelectedOption(options[0]);
        }
      }
    } else {
      if (!selectedOption) {
        setSelectedOption(options[options.length - 1]);
      } else {
        const index = options.findIndex(
          (option) => option.value === selectedOption.value
        );
        if (index > 0) {
          setSelectedOption(options[index - 1]);
        } else {
          setSelectedOption(options[options.length - 1]);
        }
      }
    }
  };

  // click outside close
  useEffect(() => {
    const mouseDownListener = (e: MouseEvent) => {
      if (
        !document.querySelector(`.${Style.select}`)?.contains(e.target as Node)
      ) {
        setOptionsOpen(false);
      }
    };

    document.addEventListener("mousedown", mouseDownListener);

    return () => {
      document.removeEventListener("mousedown", mouseDownListener);
    };
  }, []);
  return (
    <div className={`${Style.select}`}>
      <div
        className="absolute w-full h-full z-10"
        onClick={() => {
          setOptionsOpen(!optionsOpen);
        }}
        onWheel={handleWheel}
      />
      <p className={`${Style.label}`}>
        {selectedOption ? selectedOption.label : label}
      </p>
      {optionsOpen && (
        <div className={`${Style.options}`}>
          {options.map((option) => {
            return (
              <p key={option.value} onClick={() => handleSelectOption(option)}>
                {option.label}
              </p>
            );
          })}
        </div>
      )}

      <AiFillCaretDown
        className={`${Style["arrow-down"]} ${
          optionsOpen ? Style["arrow-up"] : ""
        }`}
      />
    </div>
  );
}
