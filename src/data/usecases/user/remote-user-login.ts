import {
  RemoteHttpPostClient,
  RemoteHttpPostResponse,
} from "@/data/protocols/http/remote-http-post-client";
import {
  UserLogin,
  UserLoginParams,
  UserLoginResponse,
} from "@/domain/usecases/user/user-login";

export default class RemoteUserLogin
  implements UserLogin<RemoteHttpPostResponse<UserLoginResponse>>
{
  constructor(
    private readonly url: string,
    private readonly httpClient: RemoteHttpPostClient<
      UserLoginParams,
      UserLoginResponse
    >
  ) {}

  login(
    params: UserLoginParams
  ): Promise<RemoteHttpPostResponse<UserLoginResponse>> {
    const result = this.httpClient.post({
      url: this.url,
      body: params,
    });

    return result;
  }
}
