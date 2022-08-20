import { Router } from 'express';
import { userController } from './main';

const usersRouter = Router();

usersRouter.post('/', userController.validation, userController.login);
usersRouter.get('/validate', userController.verifyToken);

export default usersRouter;
