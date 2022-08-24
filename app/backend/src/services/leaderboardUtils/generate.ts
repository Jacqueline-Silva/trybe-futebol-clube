import CalcResults from './calc';
import { ITeamMatches } from '../interfaces/ITeams';
import { ITeamBoard } from '../interfaces/ILeaderboard';

export default class LeardeboardGenerate {
  static createBoardTeam = (matches: ITeamMatches[]): ITeamBoard[] => {
    const result = matches.map((t) => ({
      name: t.teamName,
      totalPoints: CalcResults.totalPoints(t.teamHome),
      totalGames: CalcResults.totalGames(t.teamHome),
      totalVictories: CalcResults.totalVictories(t.teamHome),
      totalDraws: CalcResults.totalDraws(t.teamHome),
      totalLosses: CalcResults.totalLosses(t.teamHome),
      goalsFavor: CalcResults.totalGoalsFavor(t.teamHome),
      goalsOwn: CalcResults.totalGoalsOwn(t.teamHome),
      goalsBalance: CalcResults.totalGoalsBalance(t.teamHome),
      efficiency: CalcResults.totalEfficiency(t.teamHome),
    }));
    return result;
  };

  // static generateTotalBoard = (home: any, away: any) => ({
  // name: home.name,
  // totalPoints: home.totalPoints + away.totalPoints,
  // totalGames: home.totalGames + away.totalGames,
  // totalVictories: home.totalVictories + away.totalVictories,
  // totalDraws: home.totalDraws + away.totalDraws,
  // totalLosses: home.totalLosses + away.totalLosses,
  // goalsFavor: home.goalsFavor + away.goalsFavor,
  // goalsOwn: home.goalsOwn + away.goalsOwn,
  // goalsBalance: home.goalsBalance + away.goalsBalance,
  // efficiency: CalcResults.totalEfficiency(
  // (home.totalPoints + away.totalPoints),
  // (home.totalGames + away.totalGames),
  // ),
  // });
}
