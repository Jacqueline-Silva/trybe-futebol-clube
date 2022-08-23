export interface INewMatch {
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number,
}

export interface IMatches extends INewMatch {
  id: number,
  inProgress: boolean,
}

export interface IMatchesWithHomeAway extends IMatches {
  teamHome: {
    teamName: string
  },
  teamAway: {
    teamName: string
  }
}
