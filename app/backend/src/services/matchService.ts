import 'express-async-errors';
import Team from '../database/models/Team';
import Match from '../database/models/Match';
import {
  IMatches, IMatchUpdateGoals, INewMatch,
} from './interfaces/IMatches';
import TeamService from './teamService';

export default class MatchService {
  static getMatchID = async (id: number): Promise<IMatches> => {
    const matchID = await Match.findByPk(id, {
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    if (!matchID) {
      const err = new Error('There is no match with such id!');
      err.name = 'NotFoundError';
      throw err;
    }

    return matchID;
  };

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

  static saveInProgress = async (newMatch: INewMatch): Promise<IMatches> => {
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

  static updateInProgress = async (id: number): Promise<string> => {
    await Match.update(
      { inProgress: false },
      { where: { id } },
    );
    return 'Finished';
  };

  static upadateMatch = async (id: number, newResultMatch: IMatchUpdateGoals)
  : Promise <IMatches> => {
    const { homeTeamGoals, awayTeamGoals } = newResultMatch;
    await Match.update(
      {
        homeTeamGoals,
        awayTeamGoals,
      },
      { where: { id } },
    );
    const matchID = await MatchService.getMatchID(id);
    return matchID;
  };
}
