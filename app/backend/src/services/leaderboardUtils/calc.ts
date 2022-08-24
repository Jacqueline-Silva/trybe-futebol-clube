import { ITeamMatches } from '../interfaces/ITeams';

export default class CalcResults {
  static totalPoints = (matches: ITeamMatches[]) => {
    const result = (this.totalVictories(matches) * 3) + this.totalDraws(matches);
    return result;
  };

  static totalGames = (matches: ITeamMatches[]): number => matches.length;

  static totalVictories = (matches: ITeamMatches[]): number => {
    let victories = 0;
    matches.forEach((match) => {
      if (match.homeTeamGoals > match.awayTeamGoals) {
        victories += 1;
      }
    });
    return victories;
  };

  static totalDraws = (matches: ITeamMatches[]): number => {
    let draws = 0;
    matches.forEach((match) => {
      if (match.homeTeamGoals === match.awayTeamGoals) {
        draws += 1;
      }
    });
    return draws;
  };

  static totalLosses = (matches: ITeamMatches[]): number => {
    let losses = 0;
    matches.forEach((match) => {
      if (match.homeTeamGoals < match.awayTeamGoals) {
        losses += 1;
      }
    });
    return losses;
  };

  static totalGoalsFavor = (matches: ITeamMatches[]): number => {
    let goals = 0;
    matches.forEach((match) => {
      goals += match.homeTeamGoals;
    });
    return goals;
  };

  static totalGoalsOwn = (matches: ITeamMatches[]): number => {
    let goals = 0;
    matches.forEach((match) => {
      goals += match.awayTeamGoals;
    });
    return goals;
  };

  static totalEfficiency = (matches: ITeamMatches[]): number => {
    const points = this.totalPoints(matches);
    const games = this.totalGames(matches);
    const result = +(((points / (games * 3)) * 100).toFixed(2));
    return result;
  };

  static totalGoalsBalance = (matches: ITeamMatches[]) => {
    const result = this.totalGoalsFavor(matches) - this.totalGoalsOwn(matches);
    return result;
  };
}
