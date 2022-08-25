export const matchesMock = [
  {
  "id": 1,
  "homeTeam": 16,
  "awayTeam": 8,
  "homeTeamGoals": 1,
  "awayTeamGoals": 1,
  "inProgress": false,
  }
]

export const newMatchesMock = {
  "id": 3,
  "homeTeam": 9,
  "awayTeam": 14,
  "homeTeamGoals": 3,
  "awayTeamGoals": 2,
  "inProgress": true,
}

export const createMatchMock = {
  "homeTeam": 9,
  "awayTeam": 14, 
  "homeTeamGoals": 3,
  "awayTeamGoals": 2
}

export const createIncorrectMock = {
  "homeTeam": 900,
  "awayTeam": 14, 
  "homeTeamGoals": 3,
  "awayTeamGoals": 2
}

export const createMatchEqualTeamsMock = {
  "homeTeam": 9,
  "awayTeam": 9, 
  "homeTeamGoals": 3,
  "awayTeamGoals": 2
}

export const updateGoalsMock = {
  "homeTeamGoals": 6,
  "awayTeamGoals": 3
}

export const matchUpMock = {
  "id": 1,
  "homeTeam": 16,
  "awayTeam": 8,
  "homeTeamGoals": 6,
  "awayTeamGoals": 3,
  "inProgress": false,
  "teamHome": {
    "teamName": "São Paulo"
  },
  "teamAway": {
    "teamName": "Grêmio"
  }
}

export const listMatchesMock = [
	{
		"id": 1,
		"homeTeam": 16,
		"awayTeam": 8,
		"homeTeamGoals": 1,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "São Paulo"
		},
		"teamAway": {
			"teamName": "Grêmio"
		}
	},
	{
		"id": 2,
		"homeTeam": 9,
		"awayTeam": 14,
		"homeTeamGoals": 2,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Internacional"
		},
		"teamAway": {
			"teamName": "Santos"
		}
	},
  {
		"id": 3,
		"homeTeam": 16,
		"awayTeam": 14,
		"homeTeamGoals": 2,
		"awayTeamGoals": 3,
		"inProgress": true,
		"teamHome": {
			"teamName": "São Paulo"
		},
		"teamAway": {
			"teamName": "Santos"
		}
	},
]

export const matchesInProgress = [{
  "id": 3,
  "homeTeam": 16,
  "awayTeam": 14,
  "homeTeamGoals": 2,
  "awayTeamGoals": 3,
  "inProgress": true,
  "teamHome": {
    "teamName": "São Paulo"
  },
  "teamAway": {
    "teamName": "Santos"
  }
}]