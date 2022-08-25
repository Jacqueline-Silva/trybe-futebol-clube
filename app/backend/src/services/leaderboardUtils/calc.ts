import { ITeamMatches } from '../interfaces/ITeams';

export default class CalcResults {
  static totalPoints = (matches: ITeamMatches[], who: string) => {
    const result = (this.totalVictories(matches, who) * 3) + this.totalDraws(matches, who);
    return result;
  };

  static totalGames = (matches: ITeamMatches[]): number => matches.length;

  static totalVictories = (matches: ITeamMatches[], who: string): number => {
    let victories = 0;
    const team = who === 'home' ? 'homeTeamGoals' : 'awayTeamGoals';
    const team2 = who === 'home' ? 'awayTeamGoals' : 'homeTeamGoals';
    matches.forEach((match) => {
      if (+`${match[team]}` > +`${match[team2]}`) {
        victories += 1;
      }
    });
    return victories;
  };

  static totalDraws = (matches: ITeamMatches[], who: string): number => {
    let draws = 0;
    const team = who === 'home' ? 'homeTeamGoals' : 'awayTeamGoals';
    const team2 = who === 'home' ? 'awayTeamGoals' : 'homeTeamGoals';
    matches.forEach((match) => {
      if (+(`${match[team]}`) === +(`${match[team2]}`)) {
        draws += 1;
      }
    });
    return draws;
  };

  static totalLosses = (matches: ITeamMatches[], who: string): number => {
    let losses = 0;
    const team = who === 'home' ? 'homeTeamGoals' : 'awayTeamGoals';
    const team2 = who === 'home' ? 'awayTeamGoals' : 'homeTeamGoals';
    matches.forEach((match) => {
      if (+(`${match[team]}`) < +(`${match[team2]}`)) {
        losses += 1;
      }
    });
    return losses;
  };

  static totalGoalsFavor = (matches: ITeamMatches[], who: string): number => {
    let goals = 0;
    const team = who === 'home' ? 'homeTeamGoals' : 'awayTeamGoals';
    matches.forEach((match) => {
      goals += +(`${match[team]}`);
    });
    return goals;
  };

  static totalGoalsOwn = (matches: ITeamMatches[], who: string): number => {
    let goals = 0;
    const team2 = who === 'home' ? 'awayTeamGoals' : 'homeTeamGoals';
    matches.forEach((match) => {
      goals += +(`${match[team2]}`);
    });
    return goals;
  };

  static totalEfficiency = (matches: ITeamMatches[], who:string): number => {
    const points = this.totalPoints(matches, who);
    const games = this.totalGames(matches);
    const result = +(((points / (games * 3)) * 100).toFixed(2));
    return result;
  };

  static totalGoalsBalance = (matches: ITeamMatches[], who: string) => {
    const result = this.totalGoalsFavor(matches, who) - this.totalGoalsOwn(matches, who);
    return result;
  };
}
