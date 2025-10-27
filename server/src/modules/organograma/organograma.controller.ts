import { Controller, Get, Param, Query } from '@nestjs/common';
import { OrganogramaService } from './organograma.service';
import {
  centro_custo,
  colaboradores,
  equipes,
  setores,
} from 'prisma/organograma/generated';

@Controller('organograma')
export class OrganogrmaController {
  constructor(private readonly organogramaService: OrganogramaService) {}

  @Get('colaboradores')
  async findAll(): Promise<colaboradores[]> {
    return this.organogramaService.findAllColaboradores();
  }

  @Get('setores')
  async findAllSetores(): Promise<setores[]> {
    return this.organogramaService.findAllSetores();
  }

  @Get('centros')
  async findAllCentro(@Query('ids') ids?: string): Promise<centro_custo[]> {
    if (ids) {
      const arr = ids
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    }
    return this.organogramaService.findAllCentros();
  }

  @Get('equipes')
  async findAllEquipes(): Promise<equipes[]> {
    return this.organogramaService.findAllEquipes();
  }

  @Get(':ws_id')
  async findOne(@Param('ws_id') ws_id: string): Promise<colaboradores> {
    return this.organogramaService.findColaboradorByWsId(ws_id);
  }
}
