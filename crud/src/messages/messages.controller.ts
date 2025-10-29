import { Controller, Get, Param } from "@nestjs/common";
import { log } from "console";

@Controller('messages')
export class MessagesController{
    @Get()
    findAll(){
        return 'Essa rota retorna todos os recados!'
    }

    @Get(':id')
    findOne(@Param('id') id: any){
        console.log(id);
        
        return `Retorna um recado do id: ${id}`
    }
}