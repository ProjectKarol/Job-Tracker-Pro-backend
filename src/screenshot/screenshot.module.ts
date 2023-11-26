import { Module } from '@nestjs/common';
import { ScreenshotService } from './screenshot.service';
import { ImageUploadModule } from '../image-upload/image-upload.module';

@Module({
  imports: [ImageUploadModule],
  controllers: [],
  providers: [ScreenshotService],
  exports: [ScreenshotService],
})
export class ScreenshotModule {}
