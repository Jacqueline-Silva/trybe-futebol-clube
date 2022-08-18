import User from '../database/models/User';
import IUser from './interfaces/IUser';

export default class UserService {
  login = async (email:string, password:string): Promise<IUser | null> => {
    const user: IUser | null = await User.findOne({
      where: {
        email,
        password,
      },
    });

    return user;
  };
}
