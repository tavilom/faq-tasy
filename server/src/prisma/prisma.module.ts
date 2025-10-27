import { Module } from '@nestjs/common';
import {
  PrismaServiceFaqTasyNovo,
  PrismaServiceOrganograma,
} from './prisma.service';

@Module({
  providers: [PrismaServiceFaqTasyNovo, PrismaServiceOrganograma],
  exports: [PrismaServiceFaqTasyNovo, PrismaServiceOrganograma],
})
export class PrismaModule {}
