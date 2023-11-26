import { Inject, Injectable } from '@nestjs/common';
import puppeteer, { Page } from 'puppeteer';
import { join } from 'path';
import { AppMimeType } from '../minio-client/file.model';
import { ImageUploadService } from '../image-upload/image-upload.service';

@Injectable()
export class ScreenshotService {
  @Inject(ImageUploadService)
  private readonly imageUploadService: ImageUploadService;
  puppeteer = require('puppeteer');

  getScreenshot(): string {
    const imagePath = join(__dirname, '..', '..', 'assets', 'example1.png');
    return imagePath;
  }

  private createScreenshot = async (page: Page, url: string) => {
    await page.goto(url);
    return await page.screenshot();
  };

  scrapingJob = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const screenshot = await this.createScreenshot(
      page,
      'https://justjoin.it/offers/sea-lead-frontend-engineer-gdansk',
    );

    // Get text from the first h1 tag
    const h1Text = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      return h1 ? h1.innerText : null;
    });
    console.log('h1Text', h1Text);

    const bufferedFile = {
      fieldname: 'screenshot', // Name of the form field associated with this file
      originalname: 'screenshot.png', // Original file name
      encoding: '7bit', // Encoding type of the file
      size: screenshot.length, // Size of the file
      mimetype: 'image/png' as AppMimeType, // MIME type of the file
      buffer: screenshot, // The actual buffer from Puppeteer's screenshot
      // Add any other properties that are required by your BufferedFile type
    };
    const uploadImage = await this.imageUploadService.uploadImage(bufferedFile);
    console.log('uploadImage', uploadImage);
    await browser.close();
    return uploadImage;
  };
}

{
  {
    type Domain =
      | 'justjoin.it'
      | 'nofluffjobs.com'
      | 'remoteok.io'
      | 'remotive.io'
      | 'stackoverflow.com'
      | 'weworkremotely.com';

    const url = 'https://justjoin.it/offers/sea-lead-frontend-engineer-gdansk';
    function extractImageName(plainUrl: string): string {
      const url = new URL(plainUrl);
      const domain = url.hostname as Domain; //?
      const pathname = url.pathname;

      if (domain === 'justjoin.it') {
        const parts = pathname.split('/'); //?
        return parts[parts.length - 1];
      } else {
        new Error('Unknown job domain');
      }
    }
    extractImageName(url); //?
  }
}
