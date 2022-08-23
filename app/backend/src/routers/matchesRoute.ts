import { Router } from 'express';
import { matchesController } from './main';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.getAllInProgress);
matchesRouter.get('/', matchesController.getAll);
matchesRouter.post('/', matchesController.saveInProgress);
matchesRouter.patch('/:id/finish', matchesController.updateInProgress);

export default matchesRouter;
