import { Data, DbData } from "./common";

interface UserBase {
  username: string;
  email: string;
}

export interface DbUser extends DbData, UserBase {
  address: string;
  password: string;
}

export interface User extends Data, UserBase {
  address: string;
}

export interface DbUserPreSave extends DbUser {
  isModified: (arg0: string) => boolean;
}
