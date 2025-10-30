import { Module } from '@nestjs/common';
import { FaqTasyService } from './faqtasy.service';
import { FaqTasyController } from './faqtasy.controller';
import { PrismaModule } from '../../prisma/prisma.module';

import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { randomUUID } from 'crypto';

@Module({
  imports: [
    PrismaModule,
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/videos',
        filename: (_req, file, cb) => {
          const id = randomUUID();
          cb(null, `${id}${extname(file.originalname)}`);
        },
      }),
      limits: { fileSize: 15 * 1024 * 1024 }, // 15MB — ajuste se quiser
      fileFilter: (_req, file, cb) => {
        const ok = /^video\/(mp4|webm|ogg)$/.test(file.mimetype);
        cb(ok ? null : new Error('Tipo não suportado (mp4/webm/ogg)'), ok);
      },
    }),
  ],
  controllers: [FaqTasyController],
  providers: [FaqTasyService],
})
export class FaqTasyModule {}