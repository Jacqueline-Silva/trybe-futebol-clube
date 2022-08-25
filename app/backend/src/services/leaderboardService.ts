import Match from '../database/models/Match';
import Team from '../database/models/Team';
import { ITeamMatches } from './interfaces/ITeams';
import LeardeboardGenerate from './leaderboardUtils/generate';
import LeardeboardOrderBoard from './leaderboardUtils/order';

export default class LeaderboardsService {
  static getHome = async () => {
    const result = await Team.findAll({
      include: [
        { model: Match, as: 'homeMatches', where: { inProgress: false } }],
    });
    return result as ITeamMatches[];
  };

  static getBoardHome = async () => {
    const result = LeardeboardGenerate.createBoardTeam(await this.getHome(), 'home');
    const orderBy = LeardeboardOrderBoard.orderBoard(result);
    return orderBy;
  };
}
