# TEMPLATE-OF-NODEJS [![license](https://img.shields.io/github/license/Template-Generating/nodeJS-Backend.svg)](https://github.com/Template-Generating/nodeJS-Backend)

- [Badge](#badge)
- [Architecture](#architecture)
- [Link](#link)
    - [Routes](#routes)
- [Usage](#usage)
- [Available command](#available-command)
    - [Start server](#start-server)
    - [Testing](#testing)
    - [Code coverage](#code-coverage)
    - [CI testing](#ci-testing)
    - [Monitoring](#monitoring)
    - [Production](#production)

## Badge

| Badge | Description |
| ----- | ----------- |
| [![Libraries.io for GitHub](https://img.shields.io/librariesio/github/Template-Generating/nodeJS-Backend.svg)](https://libraries.io/github/Template-Generating/nodeJS-Backend) | monitoring dependencies, by **libraries.io** |
| [![Codecov](https://img.shields.io/codecov/c/github/Template-Generating/nodeJS-Backend.svg)](https://codecov.io/github/Template-Generating/nodeJS-Backend) | code coverage, use **codecov** |
| [![CircleCI](https://img.shields.io/circleci/project/github/Template-Generating/nodeJS-Backend.svg)](https://circleci.com/gh/Template-Generating/nodeJS-Backend) | testing CI, use **CircleCI** |
| [![Code Climate](https://img.shields.io/codeclimate/maintainability/Template-Generating/nodeJS-Backend.svg)](https://codeclimate.com/github/Template-Generating/nodeJS-Backend) | analysis code and maintainability, use **code climates** |
| [![Code Climate](https://img.shields.io/codeclimate/issues/github/Template-Generating/nodeJS-Backend.svg)](https://codeclimate.com/github/Template-Generating/nodeJS-Backend/issues) | code issues or problem, use **code climates** |
| [![Heroku](https://img.shields.io/badge/Heroku-Updated-brightgreen.svg)](https://temp-backend-node.herokuapp.com) | staging server |

## Architecture

1. Use `NodeJS` as **Backend framework**
1. Use `postgres` as **Database**
1. Use `sequelize` as **RESTful API**
1. Use `mocha` as **Test library**
1. Use `nyc` as **Coverage reporter**
1. Use `heroku` as **Deployment server**
1. Use `CircleCI` as **Continuous integration**
1. Use `Codecov` as **Code coverage service**
1. Use `libraries.io` as **Repository Monitoring**

## Link

1. heroku link: <https://temp-backend-node.herokuapp.com>
1. local link: <http://localhost:3000>

### Routes

1. `<link>/api/v1/food/create` [POST] - for create new food
1. `<link>/api/v1/foods` [GET] - for list all food
1. `<link>/api/v1/food/<id>` [GET] - for retrieve food in *id*
1. `<link>/api/v1/food/<id>` [PUT] - for update food information
1. `<link>/api/v1/food/<id>` [DELETE] - for delete food record

## Usage

go to [usage_file](USAGE.md)

## Available command

### Start server

| Available command         | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `npm` start               | start server with *default* env                        |
| `npm` run start:watch     | start server with *default* env and watch file changes |
| `npm` run start:dev       | start server with *develop* env                        |
| `npm` run start:dev:watch | start server with *develop* env and watch file changes |
| `npm` run start:prod      | start server with *prouction* env                      |

### Testing

| Available command    | Description                                             |
| -------------------- | ------------------------------------------------------- |
| `npm` run test:mocha | run mocha test without any configuration                |
| `npm` test           | run **test:mocha** in *test* env                        |
| `npm` run test:watch | run **test:mocha** in *test* env and watch file changes |

### Code coverage

| Available command   | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `npm` run cov       | run test and sent the report to **coveralls**             |
| `npm` run cov:check | run checker coverage, all of this should more and **70%** |
|                     | *lines*, *functions*, *statements*, and *branches*        |

### CI testing

| Available command   | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| `npm` run ci:test   | run test, This must run in **CircleCI** only                                |
| `npm` run ci:report | run test and sent report to **codecov**, This must run in **CircleCI** only |

### Monitoring

| Available command | Description                                                       |
| ----------------- | ----------------------------------------------------------------- |
| monitor:start     | start monitor server, use `pm2` command                           |
| monitor:stop      | stop monitor server, use `pm2` command                            |
| monitor:show      | stop monitor information, use `pm2` command                       |
| monitor:restart   | restart server and monitor, use `pm2` command                     |
| monitor:delete    | delete server process, use `pm2` command                          |
| monitor:log       | show server log, use `pm2` command. `--lines` to specify out line |

I use [keymetrics](https://app.keymetrics.io/#/)

### Production

| Available command    | Description                       |
| -------------------- | --------------------------------- |
| `npm` run start:prod | start server with *prouction* env |
