import { IsInt, IsString, Length } from "class-validator";

export class PropertyDTO {

    @IsString()
    @Length(2, 3)
    name: string;
    @IsString()
    @Length(10, 100, { groups: ['create'] })
    @Length(10, 100, { groups: ['update'] })
    @Length(10, 100, { groups: ['default'] })
    description: string;
    @IsInt()
    area: number
}