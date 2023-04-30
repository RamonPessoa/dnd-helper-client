export interface UserSignup {
  signup: (userName: string, userEmail: string, userPassword: string) => Promise<string>;
}