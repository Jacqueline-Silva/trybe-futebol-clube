import { Router } from 'express';
import { matchesController } from './main';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.getAllInProgress);
matchesRouter.get('/', matchesController.getAll);

export default matchesRouter;
