import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { RecadosService } from "./messages.service";
import { CreateMessageDTO } from "./dto/create-message.dto";
import { updateMessageDto } from "./dto/update-message.dto";

@Controller('messages')
export class MessagesController{
    constructor(private readonly recadosService: RecadosService){}
    
    @HttpCode(200)
    @Get()
    findAll(){
        return this.recadosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){        
        return this.recadosService.findOne(id);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() createMessageDTO: CreateMessageDTO){
        return this.recadosService.create(createMessageDTO)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() response: updateMessageDto){
        return this.recadosService.update(id, response)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number){
        return this.recadosService.delete(id)
    }
}