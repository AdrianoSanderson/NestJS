import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { RecadosService } from "./messages.service";
import { CreateMessageDTO } from "./dto/create-message.dto";

@Controller('messages')
export class MessagesController{
    constructor(private readonly recadosService: RecadosService){}
    
    @HttpCode(200)
    @Get()
    findAll(){
        return this.recadosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: any){        
        return this.recadosService.findOne(id);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() createMessageDTO: CreateMessageDTO){
        return this.recadosService.create(createMessageDTO)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() response: any){
        return{
            id,
            ...Body
        }
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return `Essa rota apaga o id: ${id}`
    }
}