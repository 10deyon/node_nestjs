<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Stack](#stack)
- [Getting Started](#getting-started)
  - [Documentation](#documentation)
  - [Initial setup](#initial-setup)
  - [Running the project](#running-the-project)
  - [Test](#test)
- [Author](#author)

## Description

A backend application built with [NestJS](https://github.com/nestjs/nest) and Docker

## Stack

This application was built with:

- [NestJS](https://nestjs.com/)
- [Node.js](https://node.js.org/)
- [Docker](https://www.docker.com/)

<!-- GETTING STARTED -->

## Getting Started

Before you start, make sure you have [Docker](https://docs.docker.com/install/) and [Node](https://nodejs.org/en/) installed on your local machine.

### Documentation

Documentation can be found, after initial setup, for HTTP in [Postman](https://documenter.getpostman.com/view/3903375/Uz5CKx8X).

### Initial setup
1. Clone this repo into your local machine

- with **https** </br>
  `git clone https://github.com/10deyon/node_nestjs.git`
- or with **ssh** </br>
  `git clone git@github.com:10deyon/node_nestjs.git`

2. Launch Docker compose.

3. Open API container's terminal

4. Deploy database schema into the MySQL database.
   

5. Seed the database with default data.   

### Running the app

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

<!-- Authors -->

## Authors

1. <a href="https://github.com/10deyon" target="_blank">Emmanuel Deyon, Avoseh</a>
