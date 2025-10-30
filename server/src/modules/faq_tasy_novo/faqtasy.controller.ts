import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  ParseIntPipe,
  BadRequestException,
  UseInterceptors,
  UploadedFile,
  Res,
  Delete,
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

import { FaqTasyService } from './faqtasy.service';
import { faq_tasy } from 'prisma/faq_tasy/generated/faq_tasy_novo';
import { CreateFaqTasyDto } from './dto/create/create-faqtasy.dto';
import { PatchFaqTasyDto } from './dto/patch/patch-faqtasy.dto';
import { videoMulterOptions } from '../../config/upload.config';

@Controller('faq_tasy')
export class FaqTasyController {
  constructor(private readonly faqtasyService: FaqTasyService) {}

  // ==== GET LISTA ====
  // GET /api/faq_tasy
  @Get()
  async findAllFaqTasy(): Promise<faq_tasy[]> {
    return this.faqtasyService.findAllFaqTasy();
  }

  // ==== STREAM VÍDEO ====
  // GET /api/faq_tasy/:id/video
  @Get(':id/video')
  async streamVideo(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const range = res.req.headers.range;
    const { statusCode, headers, stream } =
      await this.faqtasyService.getVideoStreamByFaq(id, range);
    res.writeHead(statusCode, headers);
    stream.pipe(res);
  }

  // ==== CRIAR ====
  // POST /api/faq_tasy
  @Post()
  createFaqTasy(@Body() dto: CreateFaqTasyDto) {
    return this.faqtasyService.createFaqTasy(dto);
  }

  // ==== PATCH (campos + vídeo opcional) ====
  // PATCH /api/faq_tasy/:id
  // multipart/form-data:
  //  - arquivo: field "video" (opcional)
  //  - demais campos: question, description, id_ws...
  @Patch(':id')
  @UseInterceptors(FileInterceptor('video', videoMulterOptions))
  patchFaqTasy(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: PatchFaqTasyDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.faqtasyService.patchFaqTasy(id, dto, file);
  }

  // ==== TROCAR APENAS O VÍDEO (PATCH) ====
  // PATCH /api/faq_tasy/:id/video
  @Patch(':id/video')
  @UseInterceptors(FileInterceptor('video', videoMulterOptions))
  async uploadVideoPatchOnly(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) throw new BadRequestException('Arquivo não enviado (campo: video)');
    const updated = await this.faqtasyService.attachVideoToFaq(id, file);
    return {
      id: updated.id,
      nome_video: updated.nome_video,
      url: `/faq_tasy/${updated.id}/video`,
    };
  }

  // ==== TROCAR APENAS O VÍDEO (POST) — opcional, se seu cliente preferir POST ====
  // POST /api/faq_tasy/:id/video
  @Post(':id/video')
  @UseInterceptors(FileInterceptor('video', videoMulterOptions))
  async uploadVideoPostOnly(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) throw new BadRequestException('Arquivo não enviado (campo: video)');
    const updated = await this.faqtasyService.attachVideoToFaq(id, file);
    return {
      id: updated.id,
      nome_video: updated.nome_video,
      url: `/faq_tasy/${updated.id}/video`,
    };
  }

  // ==== DELETE ====
  // DELETE /api/faq_tasy/:id
  @Delete(':id')
  deleteFaqTasy(@Param('id', ParseIntPipe) id: number) {
    return this.faqtasyService.deleteFaqTasy(id);
  }
}
