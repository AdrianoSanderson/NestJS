import { Injectable } from "@nestjs/common";

@Injectable()
export class ConceptsService{
    getConcepts(): string {
        return 'Retorno do Service de conceitos'
    }
}