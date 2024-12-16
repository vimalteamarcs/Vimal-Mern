import {  IsEmail, IsNotEmpty, IsString} from "class-validator"

export class LoginDto {
  @IsEmail({},{message:"use valid email"})
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}

