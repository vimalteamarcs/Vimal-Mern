import { IsNotEmpty } from "class-validator"

export class DeleteUserDto {

    @IsNotEmpty()
    readonly id: any;

}

