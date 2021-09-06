# Live Answers - Backend

## Technologies

-  [NodeJS](https://nodejs.org/en/)
-  [Socket.io](https://socket.io/docs/v4/)
-  [Typescript](https://www.typescriptlang.org/)
-  [Typeorm](https://typeorm.io/#/)
-  [Postgres](https://www.postgresql.org/)
-  [eslint](https://eslint.org/)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

```bash
# Clone this repository
$ git clone https://github.com/denisegiubilei/live-answers-backend-nodejs.git

# Go into the repository
$ cd live-answers-backend-nodejs

# Install dependencies
$ yarn

# Create a .env file with a Postgres Database configuration (See .env.example)
$ touch .env

```
## Running 

* ```yarn dev``` to run on default http://localhost:3333/

## API HTTP Endpoints

```
GET http://localhost:3000/answers
POST http://localhost:3000/answers
```

