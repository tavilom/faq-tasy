import { Module } from '@nestjs/common';
import { OrganogramaModule } from './modules/organograma/organograma.module';
import { FaqTasyModule } from './modules/faq_tasy_novo/faqtasy.module';

@Module({
  imports: [OrganogramaModule, FaqTasyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
