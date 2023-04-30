export interface UserLoginParams {
  name: string;
  password: string;
}

export interface UserLoginResponse {
  token: string;
}
export interface UserLogin<R> {
  login: (params: UserLoginParams) => Promise<R>;
}
