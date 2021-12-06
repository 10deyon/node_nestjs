// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
//   Res,
//   HttpStatus,
// } from '@nestjs/common';
// import { ApiTags } from '@nestjs/swagger';
// import { CreateTodoDto } from './dto/create-todo.dto';
// import { UpdateTodoDto } from './dto/update-todo.dto';
// import { TodoService } from './todo.service';

// @ApiTags('todos')
// @Controller('todos')
// export class TodoController {
//   constructor(private readonly service: TodoService) {}

//   @Get()
//   async index(@Res() res): Promise<object> {
//     const todos = await this.service.findAll();
//     return res.status(HttpStatus.OK).json({
//       message: 'successful',
//       data: {
//         todos,
//       },
//     });
//   }
//   @Get(':id')
//   async find(@Res() res, @Param('id') id: string): Promise<any> {
//     const todo = await this.service.findOne(id);
//     return res.status(HttpStatus.OK).json({
//       message: 'successful',
//       data: {
//         todo,
//       },
//     });
//   }

//   @Post()
//   async create(@Res() res, @Body() createTodoDto: CreateTodoDto) {
//     const todo = await this.service.create(createTodoDto);
//     return res.status(HttpStatus.OK).json({
//       message: 'successful',
//       data: {
//         todo,
//       },
//     });
//   }

//   @Put(':id')
//   async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
//     return await this.service.update(id, updateTodoDto);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: string) {
//     return await this.service.delete(id);
//   }
// }
