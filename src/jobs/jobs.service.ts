import { Inject, Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import dataSource from '../database/typeOrm.config';
import puppeteer from 'puppeteer';
import { ImageUploadService } from '../image-upload/image-upload.service';
import { AppMimeType } from '../minio-client/file.model';
import { ScreenshotService } from '../screenshot/screenshot.service';

@Injectable()
export class JobsService {
  @Inject(ImageUploadService)
  @Inject(ScreenshotService)
  private readonly imageUploadService: ImageUploadService;
  private readonly screenshotService: ScreenshotService;

  makeScreenshot = async () => {
    console.log('makeScreenshot');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      'https://justjoin.it/offers/sea-lead-frontend-engineer-gdansk',
      // 'http://localhost:3000/',
    );
    // await page.screenshot({ path: 'assets/example1.png' });
    const screenshot = await page.screenshot();
    const bufferedFile = {
      fieldname: 'screenshot', // Name of the form field associated with this file
      originalname: 'screenshot.png', // Original file name
      encoding: '7bit', // Encoding type of the file
      size: screenshot.length, // Size of the file
      mimetype: 'image/png' as AppMimeType, // MIME type of the file
      buffer: screenshot, // The actual buffer from Puppeteer's screenshot
      // Add any other properties that are required by your BufferedFile type
    };
    // Get text from the first h1 tag
    const h1Text = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      return h1 ? h1.innerText : null;
    });
    console.log('h1Text', h1Text);
    const uploadImage = await this.imageUploadService.uploadImage(bufferedFile);
    console.log('uploadImage', uploadImage);
    await browser.close();
    return uploadImage;
  };

  extractImageName(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 1];
  }

  async create(createJobDto: CreateJobDto) {
    const image_url = await this.makeScreenshot();

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
