export interface IMatchUpdateGoals {
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export interface INewMatch {
  homeTeam: number,
  awayTeam: number,
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
