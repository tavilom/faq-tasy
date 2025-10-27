import { Injectable, NotFoundException } from "@nestjs/common";
import { centro_custo, colaboradores, equipes, setores } from "prisma/organograma/generated";
import { PrismaServiceOrganograma } from "src/prisma/prisma.service";


@Injectable()
export class OrganogramaService {
    constructor(private readonly prisma: PrismaServiceOrganograma) {}

    async findCentrosByIds(arr: string[]): Promise<centro_custo[]> {
        if (!arr?.length) return [];

        // normaliza: trim, remove vazios, dedup
        const normaliza = Array.from(
            new Set(
                arr.map((s) => String(s ?? '').trim()).filter(Boolean)
            )
        );

        const idsNum = normaliza.map((s) => {
            const n = Number(s);
            return Number.isInteger(n) && /^\d+$/.test(s) ? n : null;
        }).filter((n): n is number => n !== null);

        const codigos = normaliza.filter((s) => !/^\d+$/.test(s));

        const OR: any[] = [];
        if (idsNum.length) OR.push({ id: { in: idsNum } });
        if (codigos.length) OR.push({ codigo_centro_custo: { in: codigos } });

        if (!OR.length) return [];

        return this.prisma.centro_custo.findMany({ where: { OR }});
    }

    async findAllColaboradores(): Promise<colaboradores[]>{
        return this.prisma.colaboradores.findMany();
    }

    async findAllSetores(): Promise<setores[]> {
        return this.prisma.setores.findMany();
    }

    async findAllCentros(): Promise<centro_custo[]> {
        return this.prisma.centro_custo.findMany();
    }

    async findAllEquipes(): Promise<equipes[]> {
        return this.prisma.equipes.findMany();
    }

    async findColaboradorByWsId(ws_id: string): Promise<colaboradores> {
        const colaborador = await this.prisma.colaboradores.findFirst({ where: { ws_id } });
        if (!colaborador) throw new NotFoundException(`Colaborador com ws_id=${ws_id} não econtrado`);
        return colaborador;
    }
}