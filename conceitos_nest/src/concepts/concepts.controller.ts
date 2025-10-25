import { Controller, Get } from "@nestjs/common";
import { ConceptsService } from "./concepts.service";

@Controller('concept')
export class ConceptsController{
    constructor(private readonly conceptsService: ConceptsService) {}

    @Get()
    concepts(): string{
        return this.conceptsService.getConcepts()
    }
}