import { IsNotEmpty, IsString, IsObject } from 'class-validator';

export class UpdateUserFieldsDto {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsObject()
    fieldsToUpdate: Record<string, any>;
}
