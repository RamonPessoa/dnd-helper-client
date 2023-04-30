import { useToast } from "@/presentation/components/toast";
import { useUserService } from "@/presentation/hooks/services/user-service";
import { useState } from "react";

const useSigninForm = () => {
  const { userService } = useUserService();
  const [loading, setLoading] = useState(false);
  const { ToastComponents, showToast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {};
  return {
    loading,
    ToastComponents,
    handleSubmit,
  };
};

export default useSigninForm;
