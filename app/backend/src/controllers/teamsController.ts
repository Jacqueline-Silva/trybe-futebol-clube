import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import TeamService from '../services/teamService';

export default class TeamController {
  getAll = async (_req: Request, res: Response) => {
    const allTeams = await TeamService.getAll();
    res.status(StatusCodes.OK).json(allTeams);
  };

  getTeamID = async (req: Request, res: Response) => {
    const { id } = req.params;
    const teamID = await TeamService.getTeamID(+id);
    res.status(StatusCodes.OK).json(teamID);
  };
}
