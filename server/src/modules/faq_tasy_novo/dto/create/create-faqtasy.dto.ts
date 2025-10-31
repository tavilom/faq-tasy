import { IsISO8601, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

const nullishToUndefined = () =>
  Transform(({ value }) =>
    value === null || value === '' ? undefined : value,
  );

export class CreateFaqTasyDto {
  @IsOptional()
  @IsString()
  @nullishToUndefined()
  question?: string | null;

  @IsOptional()
  @IsString()
  @nullishToUndefined()
  description?: string | null;

  // ⚠️ opcional no create — será definido após o upload
  @IsOptional()
  @IsString()
  @nullishToUndefined()
  nome_video?: string | null;

  // seu schema usa String?; deixe opcional
  @IsOptional()
  @IsString()
  @nullishToUndefined()
  id_ws?: string | null;

  // se você estiver enviando criado_em: string
  @IsISO8601()
  @nullishToUndefined()
  criado_em?: string | null;
}
