import { IsString, IsOptional } from 'class-validator';


export class CreateFaqTasyDto {
  @IsString()
  question: string;

  @IsString()
  description: string;

  @IsString()
  nome_video: string;

  @IsString()
  id_ws: string;

}
