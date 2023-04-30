export interface UserSignupParams {
  name: string;
  password: string;
}

export interface UserSignup<R> {
  signup: (params: UserSignupParams) => Promise<R>;
}