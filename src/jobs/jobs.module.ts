import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { ScreenshotModule } from '../screenshot/screenshot.module';
import { ImageUploadModule } from '../image-upload/image-upload.module';

@Module({
  imports: [ScreenshotModule, ImageUploadModule],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
