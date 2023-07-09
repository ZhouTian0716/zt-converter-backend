## Description

This is the backend repo for zt-converter, please follow the instructions step by step to start this backend on your local machine.
Special note that, here i use docker to setup local postgres database for this backend to work.

## Installation
```bash
$ npm install
```

## Setup Postgres with Docker
```bash
# install docker first, cd to this project directory
$ docker compose up dev-db -d
```
## Setup Prisma

```bash
# cd to the backend folder and
# step 1: initialize postgres table, run migration (Important!)
$ npx prisma migrate dev
# step 2: optional, to view the current postgres database with prisma studio
# you can start monitoring and modify the database with it.
$ npx prisma studio
```

## Add Environment Varialbes
```javascript
DATABASE_URL="postgresql://postgres:1234@localhost:5434/fx-conversion-db?schema=public"
// Apply your own api key from this websit ---> https://openexchangerates.org/ 
OPEN_EXCHANGE_RATES_API_KEY=<YOUR API KEY HERE>
```

## Running the app

```bash
# development
$ npm run start:dev

# Routes for testing with postman or insomnia
# GET: http://localhost:3333/rates/JPY
# GET: http://localhost:3333/transactions
# POST: http://localhost:3333/transactions
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

# other commands
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
