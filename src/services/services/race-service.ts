import { RemoteGetRaceList } from "@/data/usecases/race/remote-get-race-list";
import RemoteUserLogin from "@/data/usecases/user/remote-user-login";
import RemoteUserSignup from "@/data/usecases/user/remote-user-signup";
import AxiosHttpClient from "@/lib/http-client/axios";

const axiosHttpClient = new AxiosHttpClient();
const remoteGetRaceList = new RemoteGetRaceList(
  "https://www.dnd5eapi.co/api/races/",
  axiosHttpClient
);

export const useRaceService = () => {
  const raceService = {
    remoteGetRaceList,
  };

  return { raceService };
};
