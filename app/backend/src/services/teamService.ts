import Team from '../database/models/Team';
import ITeams from './interfaces/ITeams';

export default class TeamService {
  static getAll = async (): Promise<ITeams[]> => {
    const allTeams = await Team.findAll();
    return allTeams;
  };

  static getTeamID = async (id: number): Promise<ITeams> => {
    const teamID = await Team.findByPk(id);

    if (!teamID) {
      const err = new Error('teamID not found');
      err.name = 'NotFoundError';
      throw err;
    }

    return teamID;
  };
}
