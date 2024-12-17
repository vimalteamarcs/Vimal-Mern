
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class UserOtp {
    @Prop({ required: true })
    userid: string;

    @Prop({ required: true })
    otp: string;

    @Prop({ required: false })
    expiresAt: Date;
}

export const UserOtpSchema = SchemaFactory.createForClass(UserOtp);
