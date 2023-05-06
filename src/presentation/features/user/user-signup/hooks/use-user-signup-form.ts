import { useToast } from "@/presentation/components/toast";
import { useUserService } from "@/services/services/user-service";
import { useState } from "react";

const useSignupForm = () => {
  const { userService } = useUserService();
  const [loading, setLoading] = useState(false);
  const { ToastComponents, showToast } = useToast();

  const checkPasswordMatch = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formValues = new FormData(event.currentTarget);
    const name = formValues.get("name") as string;
    const password = formValues.get("password") as string;
    const confirmPassword = formValues.get("confirmPassword") as string;
    if (!checkPasswordMatch(password, confirmPassword)) {
      showToast("Passwords don't match", "error", 3000);
      setLoading(false);
      return;
    }
    const response = await userService.remoteUserSignup.signup({
      name,
      password,
    });
    setLoading(false);
    if (response.error) {
      showToast(response.error, "error", 3000);
    }
    if (response.body) {
      showToast("User created successfully", "success", 3000);
    }
  };

  return {
    handleSubmit,
    loading,
    ToastComponents,
  };
};

export default useSignupForm;
