import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class BaseUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(10)
  name: string;
}
