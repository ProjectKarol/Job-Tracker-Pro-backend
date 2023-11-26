import { Inject, Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import dataSource from '../database/typeOrm.config';
import { ScreenshotService } from '../screenshot/screenshot.service';
import { ImageUploadService } from '../image-upload/image-upload.service';

@Injectable()
export class JobsService {
  @Inject(ScreenshotService)
  private readonly screenshotService: ScreenshotService;

  @Inject(ImageUploadService)
  private readonly imageUploadService: ImageUploadService;

  extractImageName(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 1];
  }

  async create(createJobDto: CreateJobDto) {
    const image_url = await this.screenshotService.scrapingJob();

    const userRepository = dataSource.getRepository(Job);
    await userRepository.save({
      ...createJobDto,
      image_url: this.extractImageName(image_url.image_url),
    });
  }

  async findAll({ protocol, hostname }) {
    const userRepository = dataSource.getRepository(Job);
    const jobs = await userRepository.find();

    const mapImageUrls = jobs.map((job) => {
      const imageUrl = `${protocol}://${hostname}:${process.env.MINIO_PORT}/${process.env.MINIO_BUCKET_NAME}/${job.image_url}`;
      job.image_url = imageUrl;
      return job;
    });

    const jobResults = mapImageUrls;
    return jobResults;
  }

  findOne(id: number) {
    return `This action returns a #${id} job`;
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    const userRepository = dataSource.getRepository(Job);
    const job = await userRepository.findOneBy({
      id: id,
    });
    return userRepository.save({
      ...job, // existing fields
      ...updateJobDto, // updated fields
    });
  }

  async remove(id: number) {
    const userRepository = dataSource.getRepository(Job);
    const job = await userRepository.findOneBy({
      id: id,
    });

    this.imageUploadService.deleteImage(job.image_url);
    return userRepository.delete(id);
  }
}
