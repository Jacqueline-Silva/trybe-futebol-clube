# Projeto Trybe Futebol Club (TFC)

:rocket: *Projeto desenvolvido em 08/2022 - Bloco 28/Trybe*

![App Screenshot](./img/tfc.gif)

## :dart: Objetivo

Desenvolver uma API REST tornando-a capaz de ser consumida pelo front-end afim de informar ao usuário sobre as partidas e classificações dos times de futebol.

## :brain: Habilidades desenvolvidas

- Construir a modelagem do banco de dados de acordo com um *Diagrama de Entidade-Relacionamento (DER)*
- Utilizar o *Node*, *Express* e *Typescript* para o desenvolvimento da API
- Integrar as aplicações de front-end e back-end utilizando *docker-compose*
- Realizar operações de criar, ler e atualizar os dados no banco de dados com a benção do *sequelize*
- Tratar erros com o *express-async-errors*
- Validar os dados recebidos através do *Joi*
- Gerar e verificar token com o *jwt*
- Armazenar senhas de maneira segura no banco de dados com o auxílio do *bcrypt*
- Criar testes de integração utilizando *Mocha*, *Chai* e *Sinon*

## :hammer_and_wrench: Ferramentas utilizadas

- Node js
- MySQL
- Typescript
- [Sequelize](https://sequelize.org/)
- Express
- Docker-compose
- [Joi](https://www.npmjs.com/package/joi)
- [Json Web Tokens](https://jwt.io/)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- Mocha, Chai e Sinon

:zap: *Todos os projetos da [Trybe](https://www.betrybe.com/?utm_medium=cpc&utm_source=google&utm_campaign=Brand&utm_content=ad03_din_h&gclid=Cj0KCQjw852XBhC6ARIsAJsFPN0TgLB25i-0iaTXpXGAYC5i-3mDoTto4laUGYI5XZFJpSlNbrojLuUaAs6cEALw_wcB) utilizam Linters, Git e Github*

## :pushpin: Endpoints da API

*Há requisições prontas no arquivo "requests_project-tfc.har" localizado no diretório "backend", em que você somente precisará exportar para a ferramenta desejada, seja insomnia ou postman*

| Rotas do Login | Descrição       |  | Rotas dos Times | Descrição       |
| :---------- | :--------- | - | :----------  | :----------  |
| `GET /login/validate` | Valida token do usuário |  | `GET /teams` | Lista todos os times |
| `POST /login` | Recebe token válido |  | `GET /teams/:id` | Exibe o time específico |
|  |  |  | `GET /teams/:id/matches` | Lista todos os times com suas respectivas partidas |

| Rotas das Partidas | Descrição       |  | Rotas dos Placares | Descrição       |
| :---------- | :--------- | - | :----------  | :----------  |
| `GET /matches` | Lista todas as partidas |  | `GET /leaderboard` | Lista o placar de todas as partidas dos times |
| `GET /matches/?inProgress` | Lista as partidas com o status de progesso escolhido |  | `GET /leaderboard/home` | Lista o placar das partidas do time em casa |
| `POST /matches` | Cadastra uma nova partida |  | `GET /leaderboard/away` | Lista o placar das partidas do time fora de casa |
| `PATCH /matches/:id` | Atualiza saldo de gols da partida |
| `PATCH /matches/:id/finish` | Finaliza a partida |

## :computer: Rodando localmente

1. Clone o projeto e entre no diretório

```bash
  git clone git@github.com:Jacqueline-Silva/trybe-futebol-clube.git && cd trybe-futebol-clube
```

2. Instale as dependências

```bash
  npm run install:dependecies
```

3. No diretório de backend, renomeie arquivo "**.env.example**" retirando o *".example"* e altere as variáveis de ambiente necessárias conforme docker-compose. Exemplo:

  ```txt
  JWT_SECRET=jwt_secret
  APP_PORT=3001
  DB_USER=seu_user
  DB_PASS=sua_senha
  DB_HOST=localhost
  DB_PORT=3302
  ```

4. A partir da raiz do projeto, suba os containers docker da aplicação

```bash
  npm run compose:up
```

5. Abra as aplicações:

**Front**:
Em um navegador, entre no seu localhost

```url
  http://localhost:3000/
```

**Back**:
Para verificar os endpoints utilizados use a ferramenta de sua preferência, por exemplo o Insomnia *(como no vídeo)*

*Há requisições prontas no arquivo "requests_project-tfc.har" localizado no diretório "backend", em que você somente precisará exportar para a ferramenta desejada, seja insomnia ou postman*

**DB**:
Para visualizar o banco de dados faça a conexão do MySQL com a porta 3002

## :computer: Testando o **backend** da aplicação

0. Caminho até o diretório de testes *(opcional)*

```bash
  ./app/backend/src/tests
```

1. Rodando os testes de integração

```bash
  npm run test
```

2. Verificando a cobertura dos testes

```bash
  npm run test:coverage
```

## :mag: Observações

Os arquivos *docker-compose*, *db.example*, *dockerfile_denylist* e *apps_install*, assim como a aplicação **front-end** foram disponibilizados pela [Trybe](https://www.betrybe.com/?utm_medium=cpc&utm_source=google&utm_campaign=Brand&utm_content=ad03_din_h&gclid=Cj0KCQjw852XBhC6ARIsAJsFPN0TgLB25i-0iaTXpXGAYC5i-3mDoTto4laUGYI5XZFJpSlNbrojLuUaAs6cEALw_wcB) para realização deste projeto.

## :mailbox: Contatos

[![Linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jacqueline-sxds/)
[![Portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://jacqueline-silva.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jacqueline-Silva)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](http://wa.me/5511946162157)
[![Microsoft](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](jacque.sx@hotmail.com)
