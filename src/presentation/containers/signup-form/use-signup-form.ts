import { useUserService } from "@/presentation/hooks/services/user-service";
import { useState } from "react";

const useSignupForm = () => {
  const { userService } = useUserService();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const checkPasswordMatch = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  const clearSuccess = () => {
    setSuccess(false);
  }
  const clearError = () => {
    setError(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = new FormData(event.currentTarget);
    const name = formValues.get("name") as string;
    const password = formValues.get("password") as string;
    const confirmPassword = formValues.get("confirmPassword") as string;
    if (!checkPasswordMatch(password, confirmPassword)) {
      setError("Passwords don't match");
      return;
    }
    const response = await userService.remoteUserSignup.signup({
      name,
      password,
    });
    if (response.error) {
      setError(response.error);
    }
    if(response.body) {
      setSuccess(true);
    }
  };

  return {
    handleSubmit,
    loading,
    error,
    success,
    clearError,
    clearSuccess
  };
};

export default useSignupForm;