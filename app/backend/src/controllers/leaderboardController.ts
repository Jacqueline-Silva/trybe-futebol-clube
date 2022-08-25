import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LeaderboardsService from '../services/leaderboardService';

export default class LeaderboardControllers {
  getAllHome = async (_req: Request, res: Response) => {
    const result = await LeaderboardsService.getBoardHome();
    res.status(StatusCodes.OK).json(result);
  };

  getAllAway = async (_req: Request, res: Response) => {
    const result = await LeaderboardsService.getBoardAway();
    res.status(StatusCodes.OK).json(result);
  };
}
