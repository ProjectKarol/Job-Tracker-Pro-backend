import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import dataSource from '../database/typeOrm.config';

@Injectable()
export class JobsService {
  async create(createJobDto: CreateJobDto) {
    const userRepository = dataSource.getRepository(Job);

    await userRepository.save(createJobDto);
  }

  async findAll() {
    const userRepository = dataSource.getRepository(Job);
    return await userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} job`;
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    console.log('id', id);
    const userRepository = dataSource.getRepository(Job);
    const job = await userRepository.findOneBy({
      id: id,
    });
    console.log('job update', job);
    return userRepository.save({
      ...job, // existing fields
      ...updateJobDto, // updated fields
    });
  }

  remove(id: number) {
    const userRepository = dataSource.getRepository(Job);
    return userRepository.delete(id);
  }
}
