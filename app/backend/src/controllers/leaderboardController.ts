import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LeaderboardsService from '../services/leaderboardService';

export default class LeaderboardControllers {
  getAll = async (_req: Request, res: Response) => {
    const result = await LeaderboardsService.getBoardAll();
    res.status(StatusCodes.OK).json(result);
  };

  getAllHome = async (_req: Request, res: Response) => {
    const result = await LeaderboardsService.getBoardHome();
    res.status(StatusCodes.OK).json(result);
  };

  getAllAway = async (_req: Request, res: Response) => {
    const result = await LeaderboardsService.getBoardAway();
    res.status(StatusCodes.OK).json(result);
  };
}
