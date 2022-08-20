import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team';
import { teamMock, teamsListMock } from './mocks/teams.mock';
import TeamService from '../services/teamService';


chai.use(chaiHttp);

const { expect } = chai;

describe('/teams', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('Ao acessar o endpoint /teams com sucesso', () => {
    it('Verifica se retorna status 200', async () => {
      const response = await chai
        .request(app).get('/teams');
      expect(response.status).to.be.equal(200);
    });
    it('Verifica se retorna a lista de times participantes', async () => {
      sinon.stub(Team, 'findAll').resolves(teamsListMock as Team[]);

      const response = await chai
        .request(app).get('/teams');
      expect(response.body).to.be.an('array');
      expect(response.body).to.be.deep.equal(teamsListMock);
    });
  });
});

describe('/teams/:id', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('Ao acessar o endpoint /teams/:id com sucesso', () => {
    it('Verifica se retorna o time de mesmo ID', async () => {
      sinon.stub(Team, 'findByPk').resolves(teamMock as Team);
      sinon.stub(TeamService, 'getTeamID').resolves(teamMock);
      const response = await chai
        .request(app).get('/teams/2');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(teamMock);
    });
  });
  describe('Falha ao acessar o endpoint /teams/:id', () => {
    it('Verifica se retorna mensagem de erro ao não encontrar o time', async () => {
      sinon.stub(Team, 'findByPk').resolves(null);
      const message = 'teamID not found';

      const response = await chai
        .request(app).get('/teams/1000');
        expect(response.error.status).to.be.equal(404)
        expect(response.body).to.be.deep.equal({ message })
    });
  });
});