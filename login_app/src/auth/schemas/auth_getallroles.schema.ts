import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'AllRoles', timestamps: true })
export class AllRoles extends Document {

    id: any;

    @Prop({ required: true })
    role_name: string;


}


export const AllRolesSchema = SchemaFactory.createForClass(AllRoles);

