import RemoteUserSignup from "@/data/usecases/user/remote-user-signup";
import AxiosHttpPostClient from "@/infra/api/axios";

const axiosHttpPostClient = new AxiosHttpPostClient();
console.log(axiosHttpPostClient)
const remoteUserSignup = new RemoteUserSignup("/users", axiosHttpPostClient);

export const useUserService = () => {
  const userService = {
    remoteUserSignup,
  };

  return { userService };
};
