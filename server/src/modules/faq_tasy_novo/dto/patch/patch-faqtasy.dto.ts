import { PartialType } from "@nestjs/mapped-types"
import { CreateFaqTasyDto } from "../create/create-faqtasy.dto"

export class PatchFaqTasyDto extends PartialType(CreateFaqTasyDto) {}