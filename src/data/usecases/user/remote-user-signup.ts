import {
  RemoteHttpPostClient,
  RemoteHttpPostParams,
  RemoteHttpPostResponse,
} from "@/data/protocols/http/remote-http-post-client";

export interface RemoteUserSignupParams {
  name: string;
  password: string;
}

export default class RemoteUserSignup {
  constructor(
    private readonly url: string,
    private readonly httpClient: RemoteHttpPostClient<
      RemoteUserSignupParams,
      any
    >
  ) {}

  async signup(params: RemoteUserSignupParams): Promise<RemoteHttpPostResponse<any>> {
    return this.httpClient.post({
      url: this.url,
      body: params,
    });
  }
}
