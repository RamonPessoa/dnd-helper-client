export interface RemoteHttpPostParams<B> {
  url: string;
  body: B;
}

export interface RemoteHttpPostResponse<B> {
  statusCode: number;
  body?: B;
  error?: string;
}

export interface RemoteHttpPostClient<P, B> {
  post: (params: RemoteHttpPostParams<P>) => Promise<RemoteHttpPostResponse<B>>;
}
