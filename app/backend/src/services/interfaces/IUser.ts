export interface IUser {
  id?: number
  email: string
  username: string
  role: string
}

export interface IUserWithPassword extends IUser {
  password: string,
}
