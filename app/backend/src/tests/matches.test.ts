import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team';
import Match from '../database/models/Match';
import { createIncorrectMock, createMatchEqualTeamsMock, createMatchMock, listMatchesMock, matchesInProgress, matchesMock, matchUpMock, newMatchesMock, updateGoalsMock } from './mocks/matches.mock';
import MatchService from '../services/matchService';
import { userMock } from './mocks/users.mock';
import JwtService from '../services/jwtService';



chai.use(chaiHttp);

const { expect } = chai;

describe('/matches', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('GET /matches', () => {
    it('Verifica se retorna a lista de todas as partidas', async () => {
      sinon.stub(Match, 'findAll').resolves(matchesMock as Match[]);
      sinon.stub(MatchService, 'getAll').resolves(listMatchesMock);

      const response = await chai
        .request(app).get('/matches');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.be.deep.equal(listMatchesMock);
    });
  });

  describe('POST /matches', () => {
    it('Verifica se é retornado os dados corretos da partida cadastrada', async () => {
      sinon.stub(JwtService, 'verifyToken').resolves(userMock);
      sinon.stub(MatchService, 'saveInProgress').resolves(newMatchesMock);

      const response = await chai
        .request(app).post('/matches')
        .set({'Authorization': 'tokenMock'}).send(createMatchMock);
      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.be.deep.equal(newMatchesMock);
    });
    it('Verifica se é retornado um erro caso não seja enviado o token', async () => {
      const message = 'Token must be a valid token';

      const response = await chai
        .request(app).post('/matches')
        .set({'Authorization': ''}).send(createMatchMock);
      expect(response.error.status).to.be.equal(401)
      expect(response.body).to.be.deep.equal({ message });
    });
    it('Verifica se é retornado um erro caso o id do time não exista', async () => {
      sinon.stub(JwtService, 'verifyToken').resolves(userMock);
      const message = 'There is no team with such id!';

      const response = await chai
        .request(app).post('/matches')
        .set({'Authorization': 'tokenMock'}).send(createIncorrectMock);
      expect(response.error.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ message });
    });
    it('Verifica se é retornado um erro caso os times tenham o mesmo id', async () => {
      sinon.stub(JwtService, 'verifyToken').resolves(userMock);
      const message = 'It is not possible to create a match with two equal teams';

      const response = await chai
        .request(app).post('/matches')
        .set({'Authorization': 'tokenMock'}).send(createMatchEqualTeamsMock);
      expect(response.error.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({ message });
    });
  });
});

describe('/matches/:id', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('Verifica se ao enviar os novos saldos de gols, é retornada a partida com dados atualizados', async() => {
    sinon.stub(MatchService, 'upadateMatch').resolves(matchUpMock);
    
    const response = await chai.request(app).patch('/matches/1').send(updateGoalsMock);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.be.deep.equal(matchUpMock);
  })
});

describe('/matches/:id/finish', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('Verifica se ao alterar o status do jogo, é retornada a mensagem "Finished"', async() => {
    sinon.stub(MatchService, 'updateInProgress').resolves('Finished');
    const message = 'Finished';
    
    const response = await chai.request(app).patch('/matches/1/finish');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.be.deep.equal({ message });
  })
});

describe('/matches?inProgress', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('Verifica se é exibido somente as partidas em andamento', async() => {
    sinon.stub(MatchService, 'getAllInProgress').resolves(matchesInProgress);
    
    const response = await chai.request(app).get('/matches?inProgress=true');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body).to.be.deep.equal(matchesInProgress);
  })
});