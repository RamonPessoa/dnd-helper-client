import {
  RemoteHttpPostClient,
  RemoteHttpPostParams,
  RemoteHttpPostResponse,
} from "@/data/protocols/http/remote-http-post-client";
import {
  UserSignup,
  UserSignupParams,
  UserSignupResponse,
} from "@/domain/usecases/user/user-signup";

export default class RemoteUserSignup
  implements UserSignup<RemoteHttpPostResponse<UserSignupResponse>>
{
  constructor(
    private readonly url: string,
    private readonly httpClient: RemoteHttpPostClient<UserSignupParams, UserSignupResponse>
  ) {}

  async signup(
    params: UserSignupParams
  ): Promise<RemoteHttpPostResponse<UserSignupResponse>> {
    return this.httpClient.post({
      url: this.url,
      body: params,
    });
  }
}
