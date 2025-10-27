import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaServiceFaqTasyNovo } from 'src/prisma/prisma.service';
import { faq_tasy } from 'prisma/faq_tasy/generated/faq_tasy_novo';
//==== DTO GET
import { CreateFaqTasyDto } from './dto/create/create-faqtasy.dto';7
//==== DTO PATCH
import { PatchFaqTasyDto } from './dto/patch/patch-faqtasy.dto';

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
        question: dto.description,
        description: dto.description,
        nome_video: dto.nome_video,
        id_ws: dto.id_ws,
      },
    });
  }

  // ===== PATCH =====

  async patchFaqTasy(id: number, payload: PatchFaqTasyDto): Promise<faq_tasy> {
    if (!Number.isInteger(id) || id <= 0) {
      throw new BadRequestException('id inválido');
    }
    if (!payload || Object.keys(payload).length === 0) {
      throw new BadRequestException('corpo vazio');
    }

    const data: Record<string, any> = {};

    // ====== question ======
    if (Object.prototype.hasOwnProperty.call(payload, 'question')) {
      const v = (payload as any).question;

      // se vier undefined/null/vazio/boolean, não atualiza.
      const ValorInvalido =
        v === undefined ||
        v === null ||
        (typeof v === 'string' && v.trim() === '') ||
        typeof v === 'boolean';
      if (!ValorInvalido) {
        data.question = String(v);
      }
    }

    // ===== description ======
    if (Object.prototype.hasOwnProperty.call(payload, 'description')) {
      const v = (payload as any).description;

      const ValorInvalido =
        v === undefined ||
        v === null ||
        (typeof v === 'string' && v.trim() === '') ||
        typeof v === 'boolean';
      if (!ValorInvalido) {
        data.description = String(v);
      }
    }

    // ===== nome_video =====
    if (Object.prototype.hasOwnProperty.call(payload, 'video_nome')) {
      const v = (payload as any).video_nome;

      const ValorInvalido =
        v === undefined ||
        v === null ||
        (typeof v === 'string' && v.trim() === '') ||
        typeof v === 'boolean';
      if (!ValorInvalido) {
        data.video_nome = String(v);
      }
    }

    // ==== id_ws ======
    if (Object.prototype.hasOwnProperty.call(payload, 'id_ws')) {
      const v = (payload as any).id_ws;

      const ValorInvalido =
        v === undefined ||
        v === null ||
        (typeof v === 'string' && v.trim() === '') ||
        typeof v === 'boolean';
      if (!ValorInvalido) {
        const n = typeof v === 'string' ? Number(v.trim()) : Number(v);
        if (!Number.isInteger(n)) {
          throw new BadRequestException('id_ws deve ser um numero.');
        }
        data.id_ws = n;
      }
    }

    if (Object.keys(data).length === 0) {
      throw new BadRequestException('Nenhum campo válido para atualizar!')
    }

    try {
      return await this.prismaServiceControle.faq_tasy.update({
        where: { id },
        data,
      });
    } catch (e: any) {
      if (e?.code === 'P2025') {
        throw new BadRequestException('Serviço não encontrado')
      }
      throw e;
    }
  }

  // ===== DELETE =====

  async deleteFaqTasy(id: number): Promise<faq_tasy> {
    if (!Number.isInteger(id) || id <= 0) {
      throw new BadRequestException('id inválido');
    }

    try {
      return await this.prismaServiceControle.faq_tasy.delete({
        where: { id },
      });
    } catch (e: any) {
      if (e?.code === 'P2025') {
        throw new BadRequestException('serviço não encontrado');
      }
      throw e;
    }
  }
}
