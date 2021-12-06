import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
// import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

// const config: MysqlConnectionOptions = {
const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: { migrationsDir: 'src/db/migrations' },
};

export default config;
