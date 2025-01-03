
import { IsNotEmpty, IsNumber, IsString, IsEnum, IsDateString } from 'class-validator';

export class CreatePaymentDto {


  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  payment_method: string;

  @IsNotEmpty()
  @IsString()
  coupon: string;

  @IsNotEmpty()
  @IsString()
  transaction_id: string;


  @IsNotEmpty()
  @IsNumber()
  subtotal: number;

  @IsNotEmpty()
  @IsNumber()
  sgst: number;

  @IsNotEmpty()
  @IsNumber()
  cgst: number;

  @IsNotEmpty()
  @IsNumber()
  discount: number;

  @IsNotEmpty()
  @IsNumber()
  grandtotal: number;
}
