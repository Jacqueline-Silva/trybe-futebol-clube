import Team from '../database/models/Team';
import Match from '../database/models/Match';
import { IMatches } from './interfaces/IMatches';

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
}
