import { Injectable } from '@nestjs/common';
import { MinioClientService } from 'src/minio-client/minio-client.service';
import { BufferedFile } from 'src/minio-client/file.model';

@Injectable()
export class ImageUploadService {
  constructor(private minioClientService: MinioClientService) {
    ('');
  }

  async uploadImage(image: BufferedFile) {
    const uploaded_image = await this.minioClientService.upload(image);

    return {
      image_url: uploaded_image.url,
      message: 'Image upload successful',
    };
  }

  async deleteImage(image_url: string) {
    const deleted_image = await this.minioClientService.delete(image_url);

    return {
      image_url: deleted_image,
      message: 'Image delete successful',
    };
  }

  async getImage(image_url: string) {
    const image = await this.minioClientService.get(image_url);

    return {
      image_url: image,
      message: 'Image get successful',
    };
  }
}
