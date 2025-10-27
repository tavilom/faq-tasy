import { Module } from '@nestjs/common';
import { FaqTasyService } from './faqtasy.service';
import { FaqTasyController} from './faqtasy.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FaqTasyController],
  providers: [FaqTasyService],
})
export class FaqTasyModule {}