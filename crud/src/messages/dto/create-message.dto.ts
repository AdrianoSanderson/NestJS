import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMessageDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(255)
    readonly text: string;

    @IsString()
    @IsNotEmpty()
    readonly de: string;

    @IsString()
    @IsNotEmpty()
    readonly para: string;
}