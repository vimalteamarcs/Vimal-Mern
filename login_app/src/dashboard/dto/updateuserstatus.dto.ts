import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserStatusDto {
    @IsNotEmpty({ message: 'ID must not be empty' })
    id: any;

    @IsNotEmpty({ message: 'status must not be empty' })
    @IsString({ message: 'status must be a string' })
    status: string;
}
