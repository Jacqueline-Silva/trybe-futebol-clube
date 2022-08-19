export default interface IJwtPayload{
  data: {
    id: number
    email: string
    username: string
    role: string
  }
}
