import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PrismaClientFaqTasyNovo } from 'prisma/faq_tasy/generated/faq_tasy_novo';
import { PrismaClient as PrismaClientOrganograma } from '../../prisma/organograma/generated';

@Injectable()
export class PrismaServiceFaqTasyNovo
  extends PrismaClientFaqTasyNovo
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

@Injectable()
export class PrismaServiceOrganograma
  extends PrismaClientOrganograma
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
