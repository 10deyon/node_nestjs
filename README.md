<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/netguru/heroes-api">
    <img src="https://raw.githubusercontent.com/netguru/heroes-api/master/static/batman.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Heroes API</h3>

  <p align="center">
A backend application built with Prisma, Docker and NestJS
    <br />
    <a href="https://github.com/netguru/heroes-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/netguru/heroes-api/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Stack](#stack)
- [Getting Started](#getting-started)
  - [Documentation](#documentation)
  - [Initial setup](#initial-setup)
  - [Running the project](#running-the-project)
- [Authors](#authors)
- [License](#license)

## Stack

This application was built with:

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Node.js](https://node.js.org/)
- [Docker](https://www.docker.com/)

<!-- GETTING STARTED -->

## Getting Started

Before you start, make sure you have [Docker](https://docs.docker.com/install/) and [Node](https://nodejs.org/en/) installed on your local machine.

### Documentation

Documentation can be found, after initial setup, for HTTP in [Swagger](http://localhost:3000/swagger/#/), for GraphQL in [GraphQL Playground](http://localhost:3000/graphql).

### Initial setup

1. Clone this repo into your local machine

- with **https** </br>
  `git clone https://github.com/netguru/heroes-api.git`
- or with **ssh** </br>
  `git clone git@github.com:netguru/heroes-api.git`

2. Launch Docker compose to run Prisma's and MySQL's images.
   `docker compose up -d`

3. Open API container's terminal
   `docker compose exec api /bin/sh`

4. Deploy database schema into the MySQL database.
   `npx prisma db push`

5. Seed the database with default data.
   `npx prisma db seed`

### Running the project

After the initial setup there's no additional work needed, project is running in the background as a Docker container.

- The REST API is available on your local machine on `http://localhost:3000`.
- Swagger documentation is available on `http://localhost:3000/swagger/`.
- GraphQL playground (and server) is available on `http://localhost:3000/graphql`.

You can stop it by executing `docker compose stop`, and you can resume it by `docker compose start`


<!-- Authors -->

## Authors

1. <a href="https://github.com/10deyon" target="_blank">Emmanuel Deyon, Avoseh</a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.
