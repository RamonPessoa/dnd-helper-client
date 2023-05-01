import {
  RemoteHttpGetParams,
  RemoteHttpGetResponse,
} from "@/data/protocols/http/remote-http-get-client";
import {
  RemoteHttpPostClient,
  RemoteHttpPostParams,
  RemoteHttpPostResponse,
} from "@/data/protocols/http/remote-http-post-client";
import axios, { AxiosError } from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export default class AxiosHttpClient {
  constructor() {}

  async get(
    params: RemoteHttpGetParams<any>
  ): Promise<RemoteHttpGetResponse<any>> {
    try {
      const result = await axios.get(params.url);
      return {
        body: result.data,
        statusCode: result.status,
      };
    } catch (err) {
      const e = err as AxiosError;
      return {
        statusCode: e.response?.status || 500,
        error: (e.response?.data as string) || "Unexpected error",
      };
    }
  }

  async post(
    params: RemoteHttpPostParams<any>
  ): Promise<RemoteHttpPostResponse<any>> {
    try {
      const result = await axios.post(params.url, params.body);

      return {
        body: result.data,
        statusCode: result.status,
      };
    } catch (err) {
      const e = err as AxiosError;
      return {
        statusCode: e.response?.status || 500,
        error: (e.response?.data as string) || "Unexpected error",
      };
    }
  }
}
