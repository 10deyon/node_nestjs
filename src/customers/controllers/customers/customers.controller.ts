import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from '../../services/customers/customers.service';
import { CreateCustomerDto } from '../../dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get(':id')
  getCustomers(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) {
      res.send(customer);
    }
    res.status(404).send({ message: 'Customer not found' });
  }

  @Get('search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('customer not found', HttpStatus.NOT_FOUND);
  }

  @Get()
  getAllCustomers() {
    return this.customersService.getCustomers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
    console.log(createCustomerDto);
  }
}
