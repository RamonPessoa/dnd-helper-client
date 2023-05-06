export interface UserSignupParams {
  name: string;
  password: string;
}

export interface UserSignupResponse {
  id: string;
  name: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserSignup<R> {
  signup: (params: UserSignupParams) => Promise<R>;
}
