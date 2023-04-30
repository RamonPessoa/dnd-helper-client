export interface UserLogin {
  login: (userName: string, userPassword: string) => Promise<string>;
}