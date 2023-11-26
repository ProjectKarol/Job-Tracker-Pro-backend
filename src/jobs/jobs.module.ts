import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { ImageUploadModule } from '../image-upload/image-upload.module';
import { ScreenshotModule } from '../screenshot/screenshot.module';

@Module({
  imports: [ImageUploadModule, ScreenshotModule],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
