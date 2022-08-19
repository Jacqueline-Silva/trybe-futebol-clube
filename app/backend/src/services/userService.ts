import * as bcrypt from 'bcryptjs';
import 'express-async-errors';
import User from '../database/models/User';
import { IUser, IUserWithPassword } from './interfaces/IUser';
import JwtService from './jwtService';

export default class UserService {
  login = async (email:string, password:string): Promise<string> => {
    const user: IUserWithPassword | null = await User.findOne({
      where: { email },
    });

    const verifyPass = (pass: string, passwordHash: string): boolean => {
      const verify = bcrypt.compareSync(pass, passwordHash);
      return verify;
    };

    if (!user || !verifyPass(password, user.password)) {
      const err = new Error('Incorrect email or password');
      err.name = 'UnauthorizedError';
      throw err;
    }

    const withoutPassword: IUser = {
      id: user.id, email: user.email, username: user.username, role: user.role,
    };

    const token: string = JwtService.createToken(withoutPassword);
    return token;
  };

  verifyToken = async (token: string): Promise<string> => {
    const data: IUser = await JwtService.verifyToken(token);
    return data.role;
  };
}
