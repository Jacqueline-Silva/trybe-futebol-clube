import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import MatchService from '../services/matchService';

export default class MatchesController {
  getAll = async (_req: Request, res: Response) => {
    const allMatches = await MatchService.getAll();
    res.status(StatusCodes.OK).json(allMatches);
  };

  getAllInProgress = async (req: Request, res: Response, next: NextFunction) => {
    const { inProgress } = req.query;

    if (typeof inProgress === 'string') {
      const isBoolean = (inProgress === 'true');
      const matchesInProgress = await MatchService.getAllInProgress(isBoolean);
      return res.status(StatusCodes.OK).json(matchesInProgress);
    }

    next();
  };
}
