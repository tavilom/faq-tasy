import { Module } from "@nestjs/common";
import { OrganogrmaController } from "./organograma.controller";
import { OrganogramaService } from "./organograma.service";
import { PrismaServiceOrganograma } from "src/prisma/prisma.service";

@Module({
    imports: [],
    controllers: [OrganogrmaController],
    providers: [ OrganogramaService, PrismaServiceOrganograma],
    exports: [OrganogramaService],
})
export class OrganogramaModule {}