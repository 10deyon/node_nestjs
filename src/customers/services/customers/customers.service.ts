import { Injectable } from '@nestjs/common';
import { Customer } from 'src/customers/types/Customer';
import { CreateCustomerDto } from '../../dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'imanuel@gmail.com',
      name: 'John Doe',
    },

    {
      id: 2,
      email: 'sample@gmail.com',
      name: 'Imanuel DEyon',
    },
    {
      id: 3,
      email: 'johnny@gmail.com',
      name: 'Maqqie Dom',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
