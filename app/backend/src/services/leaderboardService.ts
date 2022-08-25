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

  static getAway = async () => {
    const result = await Team.findAll({
      include: [
        { model: Match, as: 'awayMatches', where: { inProgress: false } }],
    });
    return result as ITeamMatches[];
  };

  static getBoardAway = async () => {
    const result = LeardeboardGenerate.createBoardTeam(await this.getAway(), 'away');
    const orderBy = LeardeboardOrderBoard.orderBoard(result);
    return orderBy;
  };

  static getBoardAll = async () => {
    const teamsHome = await this.getBoardHome();
    const teamsAway = await this.getBoardAway();

    const board = teamsHome.map((home) => {
      const result = teamsAway.find((away) => home.name === away.name);
      if (!result) throw new Error();
      return LeardeboardGenerate.generateTotalBoard(home, result);
    });

    const orderBy = LeardeboardOrderBoard.orderBoard(board);
    return orderBy;
  };
}
