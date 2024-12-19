import { IsNotEmpty } from 'class-validator';

export class DeleteUserDto {
    @IsNotEmpty({ message: 'ID must not be empty' })
    id: any;
}
