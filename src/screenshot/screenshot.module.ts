import { Module } from '@nestjs/common';
import { ScreenshotService } from './screenshot.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ScreenshotService],
  exports: [ScreenshotService],
})
export class ScreenshotModule {}
