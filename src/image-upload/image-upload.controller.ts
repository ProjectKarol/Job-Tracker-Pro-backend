import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploadService } from './image-upload.service';
import { BufferedFile } from 'src/minio-client/file.model';

@Controller('images')
export class ImageUploadController {
  constructor(private imageUploadService: ImageUploadService) {
    ('');
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() image: BufferedFile) {
    return await this.imageUploadService.uploadImage(image);
  }

  @Get()
  async getImage() {
    return await this.imageUploadService.getImage(
      'a4db45fb477ea1523cf074d455fd36b5.png',
    );
  }
}
