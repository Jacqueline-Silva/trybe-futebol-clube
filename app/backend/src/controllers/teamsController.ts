import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import TeamService from '../services/teamService';

export default class TeamController {
  getAll = async (_req: Request, res: Response) => {
    const allTeams = await TeamService.getAll();
    res.status(StatusCodes.OK).json(allTeams);
  };
}
