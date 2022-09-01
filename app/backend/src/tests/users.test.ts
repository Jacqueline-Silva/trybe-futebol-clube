import * as sinon from 'sinon';
import * as chai from 'chai';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import { loginMock, loginMockIncorrect, loginMockNull, roleMock, tokenMock, userJwtMock, userMock } from './mocks/users.mock';
import User from '../database/models/User';
import JwtService from '../services/jwtService';
import UserService from '../services/userService';

chai.use(chaiHttp);

const { expect } = chai;

describe('/login', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('Sucesso ao acessar endpoint /login', () => {
    it('Verifica se retorna status 200', async () => {
      const response = await chai
        .request(app).post('/login').send(loginMock);
      expect(response.status).to.be.equal(200);
    });
    it('Verifica se retorna um objeto a chave "token"', async () => {
      sinon.stub(User, 'findOne').resolves(userMock as User);
      sinon.stub(bcrypt, 'compareSync').resolves(true);

      const response = await chai
        .request(app).post('/login').send(loginMock);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('token');
    });
    it('Verifica se retorna o token correto', async () => {
      sinon.stub(User, 'findOne').resolves(userMock as User);
      sinon.stub(bcrypt, 'compareSync').resolves(true);
      sinon.stub(JwtService, 'createToken').resolves(tokenMock.token);

      const response = await chai
        .request(app).post('/login').send(loginMock);
      expect(response.body).to.deep.equal(tokenMock);
    });
  });

  describe('Falha ao acessar o endpoint /login', () => {
    it('Verifica se retorna status 400 ao não enviar um dos campos', async () => {
      const message = 'All fields must be filled';
      const response = await chai
        .request(app).post('/login').send(loginMockNull);
      expect(response.error.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ message });
    });
    it('Verifica se retorna status 401 ao enviar os dados incorretos"', async () => {
      sinon.stub(User, 'findOne').resolves(null);
      const message = 'Incorrect email or password';

      const response = await chai
        .request(app).post('/login').send(loginMockIncorrect);
        expect(response.error.status).to.be.equal(401)
        expect(response.body).to.be.deep.equal({ message })
    });
  }); 
});

describe('/login/validate', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('Sucesso ao acessar endpoint /login/validate', () => {
    it('Verifica se retorna status 200', async () => {
      // sinon.stub(JwtService, 'verifyToken').resolves(userMock);
      const t = sinon.stub(jwt, 'verify').resolves(userJwtMock);
      const response = await chai
        .request(app).get('/login/validate').set({'Authorization': 'tokenMock'});
      console.log('res', response.body)
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(roleMock);
    });
  });

  describe('Falha ao acessar endpoint /login/validate', () => {
    it('Verifica se retorna um erro ao não enviar o token', async () => {
      const message = 'Invalid token';
      
      const response = await chai
        .request(app).get('/login/validate').set({'Authorization': ''});
      expect(response.error.status).to.be.equal(401)
      expect(response.body).to.be.deep.equal({ message })
    });
    it('Verifica se retorna um erro ao enviar token inválido', async () => {
      sinon.stub(jwt, 'verify').withArgs('token', 'secret');
      const message = 'Token must be a valid token';
      
      const response = await chai
        .request(app).get('/login/validate').set({'Authorization': 'tokenIncorrect'});
      expect(response.error.status).to.be.equal(401)
      expect(response.body).to.be.deep.equal({ message })
    });
  });
});