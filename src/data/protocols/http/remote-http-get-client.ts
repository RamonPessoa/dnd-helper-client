export interface RemoteHttpGetParams<P> {
  url: string;
  params: P;
}

export interface RemoteHttpGetResponse<B> {
  statusCode: number;
  body?: B;
  error?: string;
}

export interface RemoteHttpGetClient<P, B> {
  get: (params: RemoteHttpGetParams<P>) => Promise<RemoteHttpGetResponse<B>>;
}
