import {
  RemoteHttpGetClient,
  RemoteHttpGetResponse,
} from "@/data/protocols/http/remote-http-get-client";
import {
  GetRaceList,
  IRaceListItem,
} from "@/domain/usecases/race/get-race-list";

export interface RemoteGetRaceListResponse {
  count: number;
  results: IRaceListItem[];
}

export class RemoteGetRaceList
  implements GetRaceList<RemoteHttpGetResponse<RemoteGetRaceListResponse>>
{
  constructor(
    private readonly url: string,
    private readonly httpClient: RemoteHttpGetClient<
      any,
      RemoteGetRaceListResponse
    >
  ) {}

  async getRaceList(): Promise<
    RemoteHttpGetResponse<RemoteGetRaceListResponse>
  > {
    const response = await this.httpClient.get({
      url: this.url,
      params: {},
    });

    return response;
  }
}
