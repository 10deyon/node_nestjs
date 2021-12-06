import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { User } from './user.entity';

@Controller('relations')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): Promise<User[]> {
  //   return this.appService.getAll();
  // }

  @Get('seeder')
  async dataSeeder(): Promise<any> {
    await this.appService.seed();
    return 'Seed completed';
  }

  @Get()
  async getEmployeeById(): Promise<any> {
    return this.appService.getEmployeeById(2);
  }

  @Get('delete')
  async deleteEmployee(): Promise<any> {
    return this.appService.deleteEmployee(2);
  }
}
