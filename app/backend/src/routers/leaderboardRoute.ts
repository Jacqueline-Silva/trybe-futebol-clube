import { Router } from 'express';
import { leaderboardController } from './main';

const leaderboardRouter = Router();

leaderboardRouter.get('/', leaderboardController.getAll);

leaderboardRouter.get('/home', leaderboardController.getAllHome);

leaderboardRouter.get('/away', leaderboardController.getAllAway);

export default leaderboardRouter;
