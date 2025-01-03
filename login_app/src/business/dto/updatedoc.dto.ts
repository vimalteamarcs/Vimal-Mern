import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateDocumentsDto {

    @IsNotEmpty()
    id: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    fssai?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    gst?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    pancard?: string;
}
