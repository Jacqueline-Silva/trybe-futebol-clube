import { Model, INTEGER, STRING } from 'sequelize';
import database from './index';

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public username!: string;
  public role!: string;
}

User.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },

  username: {
    allowNull: false,
    type: STRING,
  },

  role: {
    allowNull: false,
    type: STRING,
  },

  email: {
    allowNull: false,
    type: STRING,
  },

  password: {
    allowNull: false,
    type: STRING,
  },

}, {
  sequelize: database,
  modelName: 'users',
  underscored: true,
  timestamps: false,
});

export default User;
