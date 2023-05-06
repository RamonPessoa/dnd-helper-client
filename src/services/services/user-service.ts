import RemoteUserLogin from "@/data/usecases/user/remote-user-login";
import RemoteUserSignup from "@/data/usecases/user/remote-user-signup";
import AxiosHttpClient from "@/lib/http-client/axios";

const axiosHttpPostClient = new AxiosHttpClient();
const remoteUserSignup = new RemoteUserSignup("/users", axiosHttpPostClient);
const remoteUserLogin = new RemoteUserLogin(
  "/users/login",
  axiosHttpPostClient
);

export const useUserService = () => {
  const userService = {
    remoteUserSignup,
    remoteUserLogin,
  };

  return { userService };
};
