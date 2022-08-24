import Team from '../../database/models/Team';

export interface ITeams {
  id: number,
  teamName: string,
}

export interface ITeamMatches extends Team {
  id: number,
  teamName: string,
  teamHome: [],
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

export interface ITeamResult {
  id: number,
  teamName: string,
  teamHome: [
    {
      id: number,
      homeTeam: number,
      awayTeam: number,
      homeTeamGoals: number,
      awayTeamGoals: number,
      inProgress: boolean,
    },
  ]
}
