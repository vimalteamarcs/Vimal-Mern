import { IsString, IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class SignUpDto {

  id: any;

  @IsNotEmpty()
  @IsString()
  name: any;

  @IsNotEmpty()
  @IsEmail()
  email: any;

  @IsNotEmpty()
  @Matches(/^[6-9]\d{9}$/, { message: 'Mobile number must be 10 digits and start with 6, 7, 8, or 9' })
  phone: any;

  @IsNotEmpty()
  @IsString()
  password: any;


  @IsNotEmpty()
  role: any;

  @IsNotEmpty()
  @IsString()
  status: any;

  @IsNotEmpty()

  last_login: Date;


  @IsString()
  token: any; 

  @IsNotEmpty()
  @IsString()
  otp: number;

}
