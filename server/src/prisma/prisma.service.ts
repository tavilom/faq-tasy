import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient as PrismaClientFaqTasyNovo } from "prisma/faq_tasy/generated/faq_tasy_novo";

@Injectable()
export class PrismaServiceFaqTasyNovo extends PrismaClientFaqTasyNovo implements OnModuleInit, OnModuleDestroy {

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

}
