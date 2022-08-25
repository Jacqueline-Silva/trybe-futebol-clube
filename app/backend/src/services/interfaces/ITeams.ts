import Team from '../../database/models/Team';

export interface ITeams {
  id: number,
  teamName: string,
}

export interface ITeamMatches extends Team {
  id: number,
  teamName: string,
  homeMatches: [],
  awayMatches: [],
  teamHome: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: boolean,
}
