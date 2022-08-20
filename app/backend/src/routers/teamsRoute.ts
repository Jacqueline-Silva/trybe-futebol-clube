import { Router } from 'express';
import { teamsController } from './main';

const teamsRouter = Router();

teamsRouter.get('/', teamsController.getAll);

export default teamsRouter;
