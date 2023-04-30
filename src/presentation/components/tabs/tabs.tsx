import { useState } from "react";
import Style from "./tabs.module.css";

interface TabsProps {
  items: string[];
  defaultSelected?: string;
  onChange: (selected: string) => void;
}

export default function Tabs(props: TabsProps) {
  const { items, onChange, defaultSelected } = props;
  const [selected, setSelected] = useState(defaultSelected || items[0]);

  const handleSelect = (item: string) => {
    setSelected(item);
    onChange(item);
  };

  return (
    <div className={`flex justify-center w-full`}>
      {items.map((item) => {
        return (
          <div className="w-full" key={item} onClick={() => handleSelect(item)}>
            <div className="text-center pb-3">{item}</div>
            <div className={selected === item ? `border-b-4 border-white` : `border-b-4 border-gray-400`} />
          </div>
        );
      })}
    </div>
  );
}
