import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { IUser } from './interfaces/IUser';
import IJwtPayload from './interfaces/IJwtPayload';

export default class JwtService {
  static createToken = (data: IUser): string => {
    const token = jwt.sign({ data }, process.env.JWT_SECRET as string);
    return token;
  };

  static verifyToken = async (token: string): Promise<IUser> => {
    try {
      const { data } = jwt.verify(token, process.env.JWT_SECRET as string) as IJwtPayload;
      return data;
    } catch (err) {
      const error = new Error('Token must be a valid token');
      error.name = 'UnauthorizedError';
      throw error;
    }
  };
}
