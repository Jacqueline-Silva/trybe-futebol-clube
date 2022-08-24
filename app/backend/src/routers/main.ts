import TeamController from '../controllers/teamsController';
import UserController from '../controllers/usersControllers';
import MatchController from '../controllers/matchesController';
import LeaderboardControllers from '../controllers/leaderboardController';

export const userController = new UserController();

export const teamsController = new TeamController();

export const matchesController = new MatchController();

export const leaderboardController = new LeaderboardControllers();
