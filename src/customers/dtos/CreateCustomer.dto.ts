import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  id: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
