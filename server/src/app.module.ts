import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { FaqTasyModule } from './modules/faq_tasy_novo/faqtasy.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    FaqTasyModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
