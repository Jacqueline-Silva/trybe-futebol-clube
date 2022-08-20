import { Model, INTEGER } from 'sequelize';
import database from './index';

class Team extends Model {
  public id!: number;
  public teamName!: string;
}

Team.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  sequelize: database,
  modelName: 'teams',
  underscored: true,
  timestamps: false,
});

export default Team;
