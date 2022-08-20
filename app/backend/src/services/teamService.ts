import Team from '../database/models/Team';
import ITeams from './interfaces/ITeams';

export default class TeamService {
  static getAll = async (): Promise<ITeams[]> => {
    const allTeams = await Team.findAll();
    return allTeams;
  };
}
