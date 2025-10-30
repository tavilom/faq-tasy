import { Module } from '@nestjs/common';
import { OrganogramaModule } from './modules/organograma/organograma.module';
import { FaqTasyModule } from './modules/faq_tasy_novo/faqtasy.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    OrganogramaModule,
    FaqTasyModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api', '/api/*splat'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
