import { Router } from 'express';
import { teamsController } from './main';

const teamsRouter = Router();

teamsRouter.get('/', teamsController.getAll);
teamsRouter.get('/:id', teamsController.getTeamID);
teamsRouter.get('/:id/matches', teamsController.getTeamMatches);

export default teamsRouter;
