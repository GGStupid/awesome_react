export interface UserModel {
  id: string;
  userName: string;
  email: string;
  password: string;
}

export type LoginUserModel = Omit<UserModel, "password">;

export type RegisterModel = Omit<UserModel, "id">;

export type LoginModel = Omit<UserModel, "email" | "id">;
