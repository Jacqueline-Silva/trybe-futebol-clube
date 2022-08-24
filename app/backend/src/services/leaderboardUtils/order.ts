import { ITeamBoard } from '../interfaces/ILeaderboard';

export default class LeardeboardOrderBoard {
  static orderBoard(board: ITeamBoard[]) {
    return board.sort((a, b) =>
      b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || a.goalsOwn - b.goalsOwn);
  }
}
