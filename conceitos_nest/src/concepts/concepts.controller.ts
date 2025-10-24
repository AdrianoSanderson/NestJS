import { Controller, Get } from "@nestjs/common";

@Controller('concept')
export class ConceptsController{
    @Get()
    concepts(): string{
        return 'Rota Get para Conceitos'
    }
}