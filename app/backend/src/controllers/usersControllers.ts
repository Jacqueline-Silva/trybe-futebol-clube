import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import runSchema from '../services/validateLogin';
import UserService from '../services/userService';

export default class UsersController {
  private _services: UserService;

  constructor() {
    this._services = new UserService();
  }

  validation = (req: Request, res: Response, next: NextFunction) => {
    const validation = runSchema(req.body);
    if (validation.error) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    next();
  };

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await this._services.login(email, password);
    res.status(StatusCodes.OK).json(user);
  };
}
