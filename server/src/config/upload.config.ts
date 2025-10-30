import { diskStorage } from 'multer';
import { randomUUID } from 'crypto';
import { extname, join } from 'path';
import { BadRequestException } from '@nestjs/common';

export const videoMulterOptions = {
  storage: diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, join(process.cwd(), 'uploads', 'videos'));
    },
    filename: (_req, file, cb) => {
      const id = randomUUID();
      cb(null, `${id}${extname(file.originalname).toLowerCase()}`);
    },
  }),
  limits: { fileSize: 200 * 1024 * 1024 }, // 200MB (ajuste se precisar)
  fileFilter: (_req: any, file: Express.Multer.File, cb: any) => {
    const ok =
      file.mimetype === 'video/mp4' ||
      file.mimetype === 'video/webm' ||
      file.mimetype === 'video/ogg';
    if (!ok) {
      return cb(new BadRequestException('Formato de vídeo inválido (mp4/webm/ogg).'), false);
    }
    cb(null, true);
  },
};
