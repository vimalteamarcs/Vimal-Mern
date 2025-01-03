import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCouponDto {
    @IsString()
    @IsNotEmpty({ message: 'User ID is required' })
    user_id: string;
}
