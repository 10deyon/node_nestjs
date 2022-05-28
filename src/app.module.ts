import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
// import entities, { User } from './typeorm';
import { AuthModule } from './auth/auth.module';
import entities from './typeorm';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: '9812',
      database: 'test_nestdb',
      // entities: [User],
      entities,
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
