import CalcResults from './calc';
import { ITeamMatches } from '../interfaces/ITeams';
import { ITeamBoard } from '../interfaces/ILeaderboard';

export default class LeardeboardGenerate {
  static createBoardTeam = (matches: ITeamMatches[], who: string): ITeamBoard[] => {
    const result = matches.map((t) => {
      const team = who === 'home' ? t.homeMatches : t.awayMatches;
      return ({
        name: t.teamName,
        totalPoints: CalcResults.totalPoints(team, who),
        totalGames: CalcResults.totalGames(team),
        totalVictories: CalcResults.totalVictories(team, who),
        totalDraws: CalcResults.totalDraws(team, who),
        totalLosses: CalcResults.totalLosses(team, who),
        goalsFavor: CalcResults.totalGoalsFavor(team, who),
        goalsOwn: CalcResults.totalGoalsOwn(team, who),
        goalsBalance: CalcResults.totalGoalsBalance(team, who),
        efficiency: CalcResults.totalEfficiency(team, who),
      });
    });
    return result;
  };

  static generateTotalBoard = (home: ITeamBoard, away: ITeamBoard) => {
    const result = {
      name: home.name,
      totalPoints: home.totalPoints + away.totalPoints,
      totalGames: home.totalGames + away.totalGames,
      totalVictories: home.totalVictories + away.totalVictories,
      totalDraws: home.totalDraws + away.totalDraws,
      totalLosses: home.totalLosses + away.totalLosses,
      goalsFavor: home.goalsFavor + away.goalsFavor,
      goalsOwn: home.goalsOwn + away.goalsOwn,
      goalsBalance: home.goalsBalance + away.goalsBalance,
      efficiency: CalcResults.totalEfficiencyInMatches(home, away),
    };
    return result;
  };
}
