
import { AllRoles } from './allroles.schema'

// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document, Schema as MongooseSchema } from 'mongoose';


// @Schema({ timestamps: true })
// export class User extends Document {
//     @Prop({ required: true })
//     name: string;

//     @Prop({ required: true, unique: true })
//     email: string;

//     @Prop({ required: true })
//     phone: string;

//     @Prop({ required: true })
//     password: string;

//     @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'AllRoles' })
//     role: MongooseSchema.Types.ObjectId;

//     @Prop({ required: true })
//     status: string;

//     @Prop({ required: true, type: Date })
//     last_login: Date;

//     @Prop({ required: true })
//     token: string;

//     @Prop({ required: true })
//     otp: string;
// }

// export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';


@Schema({ timestamps: true })
export class User extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'AllRoles' })
    role: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    status: string;

    @Prop({ required: true, type: Date })
    last_login: Date;

    @Prop({ required: true })
    token: string;

    @Prop({ required: true })
    otp: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
