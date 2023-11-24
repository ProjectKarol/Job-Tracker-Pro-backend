import { ConfigService } from '@nestjs/config';
// import { DataSource } from 'typeorm';
import config from './typeOrm.config';

export const databaseProviders = {
  provide: 'DATA_SOURCE',
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    console.log('config', configService);
    // const dataSource = new DataSource({
    //   type: 'postgres',
    //   host: configService.get('DATABASE_HOST'),
    //   port: configService.get('DATABASE_PORT'),
    //   username: configService.get('DATABASE_USERNAME'),
    //   password: configService.get('DATABASE_PASSWORD'),
    //   database: configService.get('DATABASE_DATABASE'),
    //   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    //   migrations: ['../migrations/*.js'],
    //   synchronize: true,
    // });

    // return dataSource;
    return config.initialize();
  },
};
