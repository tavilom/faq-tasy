import { Module } from '@nestjs/common';
import { PrismaServiceFaqTasyNovo } from './prisma.service';

@Module({
  providers: [PrismaServiceFaqTasyNovo],
  exports: [PrismaServiceFaqTasyNovo]
})
export class PrismaModule {}
