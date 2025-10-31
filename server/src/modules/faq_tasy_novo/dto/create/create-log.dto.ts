import { IsIP, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateLogDto{
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    usuario!: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    acao!: string;

    @IsOptional()
    @IsIP()
    ip?: string;
}