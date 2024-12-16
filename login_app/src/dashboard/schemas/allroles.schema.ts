import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class AllRoles extends Document {
    @Prop({ required: true, unique: true })
    id: number;

    @Prop({ required: true })
    role_name: string;

    @Prop({ required: true })
    role_slug: string;

    @Prop({ required: true })
    status: string;

    @Prop({ type: Date, default: Date.now })
    created_at: Date;

    @Prop({ type: Date, default: Date.now })
    updated_at: Date;
}

export const AllRolesSchema = SchemaFactory.createForClass(AllRoles);
