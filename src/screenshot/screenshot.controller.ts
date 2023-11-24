import { Controller, Get, Res } from '@nestjs/common';
import { ScreenshotService } from './screenshot.service';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('screenshot')
export class ScreenshotController {
  constructor(private readonly screenshotService: ScreenshotService) {
    ('');
  }

  @Get()
  createScreens(): Promise<void> {
    return this.screenshotService.createScreenshot();
  }

  @Get('get')
  getScreenshot(): string {
    return this.screenshotService.getScreenshot();
  }

  getFile(@Res() res: Response) {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    console.log('file', file, res);
    // file.pipe(res);
  }
}
