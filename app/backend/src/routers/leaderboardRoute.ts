import { Router } from 'express';
import { leaderboardController } from './main';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', leaderboardController.getAllHome);

export default leaderboardRouter;
