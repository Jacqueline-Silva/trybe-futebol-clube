import * as express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import usersRouter from './routers/userRoute';
import 'express-async-errors';
import teamsRouter from './routers/teamsRoute';
import matchesRouter from './routers/matchesRoute';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());

    this.app.use(accessControl);

    this.app.use('/login', usersRouter);

    this.app.use('/teams', teamsRouter);

    this.app.use('/matches', matchesRouter);

    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
