import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BusinessDocument = Business & Document;

@   Schema({ collection: 'businesses' })
export class Business {

    @Prop({ required: true })
    userid: string;

    @Prop({ required: true })
    businessName: string;

    @Prop({ required: true })
    businessType: string;

    @Prop()
    description: string;

    @Prop()
    businessAddress: string;

    @Prop()
    country: string;

    @Prop()
    contactPerson: string;

    @Prop({ unique: true })
    email: string;

    @Prop()
    fssai: string; // Store the file path

    @Prop()
    gst: string; // Store the file path

    @Prop()
    pancard: string; // Store the file path

    @Prop()
    aadhar: string;

    @Prop()
    isVendor: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    zipCode: string;
}

export const businessSchema = SchemaFactory.createForClass(Business);
