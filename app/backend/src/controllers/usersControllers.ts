import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import runSchema from '../services/validateLogin';
import UserService from '../services/userService';

export default class UsersController {
  validation = (req: Request, res: Response, next: NextFunction) => {
    const validation = runSchema(req.body);
    if (validation.error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'All fields must be filled' });
    }
    next();
  };

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = await UserService.login(email, password);
    res.status(StatusCodes.OK).json({ token });
  };

  verifyToken = async (req: Request, res: Response, _next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      const err = new Error('Invalid token');
      err.name = 'UnauthorizedError';
      throw err;
    }

    const role = await UserService.verifyToken(token);
    res.status(StatusCodes.OK).json({ role });
  };
}
