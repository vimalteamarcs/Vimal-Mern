import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })

export class User {

  id: any;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: number;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  last_login: Date;

  @Prop({ required: false })
  token: string;

  @Prop({ required: false })
  otp: string;
}


export const UserSchema = SchemaFactory.createForClass(User);

