import { IsInt, IsString } from "class-validator";

export class PropertyDTO {

    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsInt()
    area: number
}