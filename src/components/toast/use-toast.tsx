import { v4 as uuidv4 } from "uuid";
import { useCallback, useState } from "react";
import Toast from "./toast";

export type ToastType = "success" | "error" | "info" | "warning";

type ToastMessage = {
  id: string;
  message: string;
  duration?: number;
  type: ToastType;
  shouldAnimate: boolean;
};

const useToast = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback(
    (message: string, type: ToastType, duration: number = 3000) => {
      const id = uuidv4();
      setToasts((old) => {
        const newToasters = old.map((toast) => {
          if (toast.shouldAnimate) {
            return { ...toast, shouldAnimate: false };
          }
          return toast;
        });
        return [
          ...newToasters,
          { id, message, duration, type, shouldAnimate: true },
        ];
      });
    },
    []
  );

  const hideToast = useCallback((id: string) => {
    setToasts((old) => {
      const newToasters = old.map((toast) => {
        if (toast.shouldAnimate) {
          return { ...toast, shouldAnimate: false };
        }
        return toast;
      });
      return newToasters.filter((toast) => toast.id !== id);
    });
  }, []);

  const ToastComponents = useCallback(
    () => (
      <div className="absolute bottom-5 right-5 flex flex-col gap-5 overflow-hidden">
        {toasts.map((toast, index) => (
          <Toast
            key={toast.id}
            message={toast.message}
            duration={toast.duration}
            onClose={() => hideToast(toast.id)}
            type={toast.type}
            isLatest={toast.shouldAnimate}
          />
        ))}
      </div>
    ),
    [hideToast, toasts]
  );

  return {
    showToast,
    hideToast,
    ToastComponents,
  };
};

export default useToast;
