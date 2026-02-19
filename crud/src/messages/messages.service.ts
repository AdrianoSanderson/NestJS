import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Message } from "./entities/message.entity";
import { CreateMessageDTO } from "./dto/create-message.dto";

@Injectable()
export class RecadosService {
    private lastID = 1;
    private messages: Message[] = [
        {
            id: 1,
            text: 'Este é um recado de teste',
            de: 'Adriano',
            para: 'Fernanda',
            lido: false,
            data: new Date()
        }
    ]

    findAll(){
        return this.messages;
    }

    findOne(id: string){
        const recado = this.messages.find(item => item.id === +id)

        if(recado) return recado;

        throw new HttpException('Recado não encontrado', HttpStatus.NOT_FOUND);
    }

    create(createMessageDTO: CreateMessageDTO){
        this.lastID++;
        const id = this.lastID;
        const newMessage = {
            id,
            ...createMessageDTO,
            lido: false,
            data: new Date()
        };
        this.messages.push(newMessage);
        
        return newMessage;
    }
}