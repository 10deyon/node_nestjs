import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactInfo } from './contact-info.entity';
import { Employee } from './employee.entity';
import { Meeting } from './meeting.entity';
import { Task } from './task.entity';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Meeting) private meetingRepository: Repository<Meeting>,
    @InjectRepository(Task) private taskRepository: Repository<Task>,
    @InjectRepository(ContactInfo)
    private contactInfoRepository: Repository<ContactInfo>,
  ) {}

  async seed() {
    // employee 1 CEO
    const ceo = this.employeeRepository.create({ name: ' Emmanuel CEO' });
    await this.employeeRepository.save(ceo);

    const ceoContactInfo = this.contactInfoRepository.create({
      email: 'sample@test.com',
    });

    ceoContactInfo.employee = ceo;
    await this.contactInfoRepository.save(ceoContactInfo);

    // employee 2 Manager
    const manager = this.employeeRepository.create({
      name: 'Marius',
      manager: ceo,
    });

    const task1 = this.taskRepository.create({ name: 'Hire People' });
    await this.taskRepository.save(task1);

    const task2 = this.taskRepository.create({ name: 'Present to CEO' });
    await this.taskRepository.save(task2);

    manager.tasks = [task1, task2];

    const meeting1 = this.meetingRepository.create({ zoomUrl: 'meeting.com' });
    meeting1.attendees = [ceo];
    await this.meetingRepository.save(meeting1);

    manager.meetings = [meeting1];
    await this.employeeRepository.save(manager);
  }

  getHello(): string {
    return 'Hello World!';
  }

  getAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['pets'] });
  }

  async getOneById(id: string | number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  createUser(name: string): Promise<User> {
    const newUser = this.usersRepository.create({ name });

    return this.usersRepository.save(newUser);
  }

  async updateUser(id: string | number, name: string): Promise<User> {
    const user = await this.getOneById(id);
    user.name = name;

    return this.usersRepository.save(user);
  }

  async deleteUser(id: string | number): Promise<User> {
    const user = await this.getOneById(id);

    return this.usersRepository.remove(user);
  }

  async getEmployeeById(id: number) {
    return this.employeeRepository.findOne(id, {
      relations: [
        'manager',
        'directReports',
        'tasks',
        'contactInfo',
        'meetings',
      ],
    });

    // return this.employeeRepository
    //   .createQueryBuilder('employee')
    //   .leftJoinAndSelect('employee.directReports', 'directReports')
    //   .leftJoinAndSelect('employee.meetings', 'mmetings')
    //   .leftJoinAndSelect('employee.tasks', 'tasks')
    //   .where('employee.id = :employeeId', { employeeId: id })
    //   .getOne();
  }

  async deleteEmployee(id: number) {
    return this.employeeRepository.delete(id);
  }

  // customQuery(): any {
  //   return this.usersRepository.createQueryBuilder('user').select().groupBy();
  // }
}
