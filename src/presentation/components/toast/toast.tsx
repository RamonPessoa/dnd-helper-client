import { useEffect } from "react";
import Style from "./toast.module.css";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info" | "warning";
  duration?: number;
  onClose?: () => void;
  isLatest?: boolean;
}

export default function Toast({
  message,
  type,
  duration,
  onClose,
  isLatest,
}: ToastProps) {
  const color = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "info":
        return "bg-blue-500";
      case "warning":
        return "bg-yellow-500";
    }
  };
  

  useEffect(() => {
    if (duration) {
      setTimeout(() => {
        onClose && onClose();
      }, duration);
    }
  }, [duration, onClose]);
  return (
    <div className={`p-5 ${color()} ${isLatest ? Style.toast : ""}`} onAnimationEnd={(e) => {
      console.log(Style.toast)
      e.currentTarget.classList.remove(Style.toast);
    }}>
      <p>{message}</p>
    </div>
  );
}
