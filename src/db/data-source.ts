import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'sa',
  database: 'migration-video-learning',
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  entities: ['src/**/*.entity{.ts,.js}'],
});
