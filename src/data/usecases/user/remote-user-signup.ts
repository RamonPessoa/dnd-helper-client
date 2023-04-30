import {
  RemoteHttpPostClient,
  RemoteHttpPostParams,
  RemoteHttpPostResponse,
} from "@/data/protocols/http/remote-http-post-client";
import { UserSignup, UserSignupParams } from "@/domain/usecases/user/user-signup";

export default class RemoteUserSignup implements UserSignup<RemoteHttpPostResponse<any>> {
  constructor(
    private readonly url: string,
    private readonly httpClient: RemoteHttpPostClient<
      UserSignupParams,
      any
    >
  ) {}

  async signup(params: UserSignupParams): Promise<RemoteHttpPostResponse<any>> {
    return this.httpClient.post({
      url: this.url,
      body: params,
    });
  }
}
