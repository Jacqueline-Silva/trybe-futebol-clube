import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import JwtService from '../services/jwtService';
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

  saveInProgress = async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    const newMatch = req.body;

    const err = new Error('Token must be a valid token');
    err.name = 'UnauthorizedError';

    if (!token) throw err;
    await JwtService.verifyToken(token);

    const saveNewMatch = await MatchService.saveInProgress(newMatch);

    res.status(StatusCodes.CREATED).json(saveNewMatch);
  };

  updateInProgress = async (req: Request, res: Response) => {
    const { id } = req.params;
    const message = await MatchService.updateInProgress(+id);
    res.status(StatusCodes.OK).json({ message });
  };
}
