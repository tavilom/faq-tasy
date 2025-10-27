import { Controller, Post, Body, Get, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { FaqTasyService } from './faqtasy.service';
import { faq_tasy } from 'prisma/faq_tasy/generated/faq_tasy_novo';
//==== DTO CREATE
import { CreateFaqTasyDto } from './dto/create/create-faqtasy.dto';
//==== DTO DE PATCH
import { PatchFaqTasyDto } from './dto/patch/patch-faqtasy.dto';

@Controller('faq_tasy')
export class FaqTasyController {
  constructor(private readonly faqtasyService: FaqTasyService) {}

  // ==== GET ====
  @Get('faq_tasy')
  async findAllFaqTasy(): Promise<faq_tasy[]> {
    return this.faqtasyService.findAllFaqTasy();
  } 

  // ==== POST ====
  @Post('faq_tasy')
  createFaqTasy(@Body() dto: CreateFaqTasyDto) {
    return this.faqtasyService.createFaqTasy(dto);
  }


  // ==== PUTCH ====
  @Patch('faq_tasy/:id')
  patchFaqTasy(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: PatchFaqTasyDto,
  ) {
    return this.faqtasyService.patchFaqTasy(id, dto);
  }

  @Delete('faq_tasy/:id')
  deleteFaqTasy(@Param('id', ParseIntPipe) id: number) {
    return this.faqtasyService.deleteFaqTasy(id);
  }
}
