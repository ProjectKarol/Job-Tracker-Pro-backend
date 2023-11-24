import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { join } from 'path';

@Injectable()
export class ScreenshotService {
  puppeteer = require('puppeteer');

  getScreenshot(): string {
    const imagePath = join(__dirname, '..', '..', 'assets', 'example1.png');
    return imagePath;
  }

  createScreenshot = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      // 'https://justjoin.it/offers/sea-lead-frontend-engineer-gdansk',
      'http://localhost:3000/',
    );
    await page.screenshot({ path: 'assets/example1.png' });

    await browser.close();
  };
}
