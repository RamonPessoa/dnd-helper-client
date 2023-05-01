import { useToast } from "@/presentation/components/toast";
import { useAuth } from "@/presentation/contexts/auth";
import { useUserService } from "@/presentation/hooks/services/user-service";
import { useRouter } from "next/router";
import { useState } from "react";

const useSigninForm = () => {
  const { userService } = useUserService();
  const [loading, setLoading] = useState(false);
  const { ToastComponents, showToast } = useToast();
  const { setToken } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = new FormData(event.currentTarget);
    const name = formValues.get("name") as string;
    const password = formValues.get("password") as string;
    const response = await userService.remoteUserLogin.login({
      name,
      password,
    });
    if (response.error) {
      showToast(response.error, "error", 3000);
    }
    if (response.body) {
      showToast("User logged in successfully", "success", 3000);
      setToken(response.body.token);
      router.push("/user/sheets");
    }
  };
  return {
    loading,
    ToastComponents,
    handleSubmit,
  };
};

export default useSigninForm;
