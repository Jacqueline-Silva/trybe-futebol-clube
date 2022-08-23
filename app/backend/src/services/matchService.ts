import 'express-async-errors';
import Team from '../database/models/Team';
import Match from '../database/models/Match';
import { IMatches, INewMatch } from './interfaces/IMatches';
import TeamService from './teamService';

export default class MatchService {
  static getAll = async (): Promise<IMatches[]> => {
    const matches = await Match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  };

  static getAllInProgress = async (inProgress: boolean): Promise<IMatches[]> => {
    const matchesInProgress = await Match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
      where: { inProgress },
    });
    return matchesInProgress;
  };

  static saveInProgress = async (newMatch: INewMatch) => {
    const { homeTeam, awayTeam } = newMatch;
    await TeamService.getTeamID(+homeTeam);
    await TeamService.getTeamID(+awayTeam);

    if (homeTeam === awayTeam) {
      const err = new Error('It is not possible to create a match with two equal teams');
      err.name = 'UnauthorizedError';
      throw err;
    }

    const news = await Match.create({
      ...newMatch,
      inProgress: true,
    });

    return news;
  };

  static updateInProgress = async (id: number) => {
    await Match.update(
      { inProgress: false },
      { where: { id } },
    );
    return 'Finished';
  };
}
