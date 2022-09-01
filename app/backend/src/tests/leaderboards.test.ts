import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import LeaderboardsService from '../services/leaderboardService';
import { boardAllMock, boardAwayMock, boardHomeMock } from './mocks/leaderboards.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('/leaderboard', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Verifica se retorna o placar geral de cada time', async () => {
    sinon.stub(LeaderboardsService, 'getBoardHome').resolves(boardHomeMock);
    sinon.stub(LeaderboardsService, 'getBoardAway').resolves(boardAwayMock);

    const response = await chai
      .request(app).get('/leaderboard');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body).to.be.deep.equal(boardAllMock);
  });
});

describe('/leaderboard/home', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Verifica se retorna o placar de cada time das partidas finalizadas', async () => {
    // sinon.stub(LeardeboardGenerate, 'createBoardTeam').withArgs(teamsHomeMock, 'home');
    sinon.stub(LeaderboardsService, 'getBoardHome').resolves(boardHomeMock);

    const response = await chai
      .request(app).get('/leaderboard/home');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body).to.be.deep.equal(boardHomeMock);
  });
});

describe('/leaderboard/away', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Verifica se retorna o placar de cada time das partidas finalizadas', async () => {
    sinon.stub(LeaderboardsService, 'getBoardAway').resolves(boardAwayMock);

    const response = await chai
      .request(app).get('/leaderboard/away');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body).to.be.deep.equal(boardAwayMock);
  });
});
