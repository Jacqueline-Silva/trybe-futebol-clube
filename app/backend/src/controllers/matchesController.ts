import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import MatchService from '../services/matchService';

export default class MatchesController {
  getAll = async (_req: Request, res: Response) => {
    const allMatches = await MatchService.getAll();
    res.status(StatusCodes.OK).json(allMatches);
  };
}
