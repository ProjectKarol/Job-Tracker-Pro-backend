### Migration

___

To generate a new migration you can simply call:

```bash
npm run migration:generate -- ./src/migration/<NAME_OF_NEW_MIGRATION>
```

This will create a new migration file in `./src/migration/` folder.
After that you can run `migration:run` script to update the database:

```bash
npm run migration:run
```

See more information in docs: [Typeorm.io/migrations](https://typeorm.io/migrations#migrations)
typeorm migration:run

## Mino integration

how to integrated minio-client [betterProgramming](https://betterprogramming.pub/upload-and-retrieve-images-by-integrating-minio-with-nestjs-419e4e629b5d)

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
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
