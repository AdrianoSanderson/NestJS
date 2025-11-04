import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { log } from "console";

@Controller('messages')
export class MessagesController{
    @HttpCode(200)
    @Get()
    findAll(){
        return 'Essa rota retorna todos os recados!'
    }

    @Get(':id')
    findOne(@Param('id') id: any){
        console.log(id);
        
        return `Retorna um recado do id: ${id}`
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() response: any){
        return response
    }
}