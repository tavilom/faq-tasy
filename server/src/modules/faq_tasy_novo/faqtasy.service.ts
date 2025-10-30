import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaServiceFaqTasyNovo } from 'src/prisma/prisma.service';
import { faq_tasy } from 'prisma/faq_tasy/generated/faq_tasy_novo';

// DTOs
import { CreateFaqTasyDto } from './dto/create/create-faqtasy.dto';
import { PatchFaqTasyDto } from './dto/patch/patch-faqtasy.dto';

// FS/Path
import { createReadStream, statSync, existsSync, unlinkSync } from 'fs';
import { join, basename } from 'path';

@Injectable()
export class FaqTasyService {
  constructor(private prismaServiceControle: PrismaServiceFaqTasyNovo) {}

  // ===== GET =====
  async findAllFaqTasy(): Promise<faq_tasy[]> {
    return this.prismaServiceControle.faq_tasy.findMany();
  }

  // ===== POST =====
  async createFaqTasy(dto: CreateFaqTasyDto): Promise<faq_tasy> {
    return this.prismaServiceControle.faq_tasy.create({
      data: {
        question: dto.question,       // corrigido
        description: dto.description,
        nome_video: dto.nome_video,
        id_ws: dto.id_ws as any,      // ajuste se id_ws for number no schema
      },
    });
  }

  // ===== PATCH =====
  /** Troca o vídeo do FAQ e remove o antigo do disco (se existir) */
  private async replaceFaqVideo(id: number, newFile: Express.Multer.File): Promise<string> {
    const current = await this.prismaServiceControle.faq_tasy.findUnique({
      where: { id },
      select: { nome_video: true },
    });
    if (!current) throw new NotFoundException('FAQ não encontrado');

    const nome_video_novo = newFile.filename;
    const updated = await this.prismaServiceControle.faq_tasy.update({
      where: { id },
      data: { nome_video: nome_video_novo },
      select: { nome_video: true },
    });

    // remove o antigo (se diferente e existir)
    const antigo = current.nome_video && basename(current.nome_video);
    if (antigo && antigo !== nome_video_novo) {
      const oldPath = join(process.cwd(), 'uploads', 'videos', antigo);
      if (existsSync(oldPath)) {
        try { unlinkSync(oldPath); } catch { /* ignora erro de deleção */ }
      }
    }

    return updated.nome_video!;
  }

  /** PATCH que aceita arquivo opcional de vídeo além do JSON */
  async patchFaqTasy(id: number, payload: PatchFaqTasyDto, file?: Express.Multer.File): Promise<faq_tasy> {
    if (!Number.isInteger(id) || id <= 0) {
      throw new BadRequestException('id inválido');
    }
    if ((!payload || Object.keys(payload).length === 0) && !file) {
      throw new BadRequestException('corpo vazio');
    }

    const allowed: (keyof PatchFaqTasyDto)[] = ['question', 'description', 'nome_video', 'id_ws'];
    const data: Record<string, any> = {};
    for (const k of allowed) {
      const v = payload[k];
      if (v !== undefined) data[k as string] = typeof v === 'string' ? v.trim() : v;
    }

    // se veio arquivo, prioriza o filename gerado pelo Multer
    if (file) {
      await this.replaceFaqVideo(id, file);
      data.nome_video = file.filename;
    }

    if (Object.keys(data).length === 0) {
      throw new BadRequestException('Nenhum campo válido para atualizar!');
    }

    try {
      return await this.prismaServiceControle.faq_tasy.update({
        where: { id },
        data,
      });
    } catch (e: any) {
      if (e?.code === 'P2025') throw new NotFoundException('FAQ não encontrado');
      throw e;
    }
  }

  /** Rota dedicada para trocar apenas o vídeo (se preferir usar) */
  async attachVideoToFaq(id: number, file: Express.Multer.File): Promise<faq_tasy> {
    if (!Number.isInteger(id) || id <= 0) throw new BadRequestException('id inválido');
    await this.replaceFaqVideo(id, file);
    return this.prismaServiceControle.faq_tasy.findUnique({ where: { id } }) as any;
  }

  // ====== VIDEO: streaming com suporte a Range ======
  async getVideoStreamByFaq(id: number, rangeHeader?: string) {
    const faq = await this.prismaServiceControle.faq_tasy.findUnique({
      where: { id },
      select: { nome_video: true },
    });
    if (!faq) throw new NotFoundException('FAQ não encontrado');
    if (!faq.nome_video) throw new NotFoundException('FAQ sem vídeo');

    const filePath = join(process.cwd(), 'uploads', 'videos', faq.nome_video);
    const mime =
      faq.nome_video.endsWith('.mp4') ? 'video/mp4' :
      faq.nome_video.endsWith('.webm') ? 'video/webm' :
      faq.nome_video.endsWith('.ogg') ? 'video/ogg' :
      'application/octet-stream';

    const stats = statSync(filePath);
    const fileSize = stats.size;

    if (rangeHeader) {
      const parts = rangeHeader.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;

      return {
        statusCode: 206,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize.toString(),
          'Content-Type': mime,
        },
        stream: createReadStream(filePath, { start, end }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Length': fileSize.toString(),
        'Content-Type': mime,
        'Accept-Ranges': 'bytes',
      },
      stream: createReadStream(filePath),
    };
  }

  // ===== DELETE =====
  async deleteFaqTasy(id: number): Promise<faq_tasy> {
    if (!Number.isInteger(id) || id <= 0) {
      throw new BadRequestException('id inválido');
    }
    try {
      return await this.prismaServiceControle.faq_tasy.delete({ where: { id } });
    } catch (e: any) {
      if (e?.code === 'P2025') {
        throw new NotFoundException('FAQ não encontrado');
      }
      throw e;
    }
  }
}
