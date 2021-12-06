import { ApiProperty } from '@nestjs/swagger';

export class Todo {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}
