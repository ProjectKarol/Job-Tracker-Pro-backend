import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Delete,
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

  @Delete()
  async deleteImage() {
    return await this.imageUploadService.deleteImage(
      'cf3a372a19d3a5d96a120661aa50c12f.png',
    );
  }
}
