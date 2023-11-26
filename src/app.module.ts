import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { JobsModule } from './jobs/jobs.module';
import { ScreenshotService } from './screenshot/screenshot.service';
import { ScreenshotController } from './screenshot/screenshot.controller';
import { MinioClientModule } from './minio-client/minio-client.module';
import { ImageUploadModule } from './image-upload/image-upload.module';
import { ScreenshotModule } from './screenshot/screenshot.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    JobsModule,
    MinioClientModule,
    ImageUploadModule,
    ScreenshotModule,
  ],
  controllers: [AppController, ScreenshotController],
  providers: [AppService, ScreenshotService],
})
export class AppModule {}
