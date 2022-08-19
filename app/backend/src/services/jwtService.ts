import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { IUser } from './interfaces/IUser';

export default class JwtService {
  static createToken = (data: IUser): string => {
    const token = jwt.sign({ data }, process.env.JWT_SECRET as string);
    return token;
  };
}
