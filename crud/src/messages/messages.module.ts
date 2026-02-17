import { Module } from "@nestjs/common";
import { MessagesController } from "./messages.controller";
import { RecadosService } from "./messages.service";

@Module({
    controllers: [MessagesController],
    providers: [RecadosService]
})
export class MessagesModule {}