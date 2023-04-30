export interface IUser {
  userName: string;
  userPassword: string;
}

export interface IUserModel extends IUser {
  id: string;
}
