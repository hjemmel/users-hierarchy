# User hierarchy application

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
[![CircleCI](https://circleci.com/gh/hjemmel/users-hierarchy.svg?style=svg)](https://circleci.com/gh/hjemmel/users-hierarchy)
[![CodeFactor](https://www.codefactor.io/repository/github/hjemmel/users-hierarchy/badge)](https://www.codefactor.io/repository/github/hjemmel/users-hierarchy)

## How to Run the application and the tests

### Requirements

* [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and [Docker Compose](https://docs.docker.com/compose/install/) installed in the machine

## Run the tests

```sh
make test
```

### Run the application

```sh
make dev
```

Open in the browser URL: http://localhost:3000/api-docs

## CI / CD

Application is built using [CircleCI](https://circleci.com/gh/hjemmel/users-hierarchy) and deployed in [heroku](https://users-hierarchy.herokuapp.com/api-docs/) 

## Important files
 
```
server
    api
        controllers      
            user-roles
                controller.ts       // Main controller to handle incoming requests
        common
            api.yml                 // API definition, API is validate based on this file
        services         
            user.service.ts         // main service with all logic regarding hierarchy
            user.service.test.ts    // tests for the service
```

## Technologies / Libraries

-   [Node](https://nodejs.org/en/) - JS runtime environment
-   [Expressjs](https://expressjs.com) -  web framework for Node.js
-   [Yarn](https://yarnpkg.com/en/) - package manager
-   [TypeScript](https://www.typescriptlang.org) - Typed superset of javascript that compiles to plain javascript
-   [ESLint](https://eslint.org/) - Lint tool for TypeScript
-   [Swagger](https://swagger.io) - API documentation and validation
-   [Jest](https://jestjs.io) - Test Suite
