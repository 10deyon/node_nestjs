import { ApiProperty } from '@nestjs/swagger';

export class BaseTodoDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;
}
