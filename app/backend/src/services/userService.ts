import * as bcrypt from 'bcryptjs';
import User from '../database/models/User';
import IUser from './interfaces/IUser';
import JwtService from './jwtService';

export default class UserService {
  login = async (email:string, password:string): Promise<string> => {
    const user: IUser | null = await User.findOne({
      where: { email },
    });

    if (!user || !bcrypt.compare(password, user.password)) {
      const err = new Error('Incorrect email or password');
      err.name = 'UnauthorizedError';
      throw err;
    }

    const token: string = JwtService.createToken(user);
    return token;
  };
}
