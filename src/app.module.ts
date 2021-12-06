import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { User } from './user.entity';
import { Employee } from './employee.entity';
import { ContactInfo } from './contact-info.entity';
import { Meeting } from './meeting.entity';
import { Task } from './task.entity';

// import { UsersModule } from './users/users.module';
// import { TodoModule } from './todo/todo.module';

// import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User, Employee, ContactInfo, Meeting, Task]),
    // UsersModule,
    // TodoModule,
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest_tutorial'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
