
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type PaymentDocument = Payment & Document;

// @Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
// export class Payment {
//     @Prop({ required: true })
//     booking_id: any;

//     @Prop({ required: true })
//     user_id: string;

//     @Prop({ required: true, type: Number })
//     amount: number;

//     @Prop({ required: true })
//     payment_method: string;

//     @Prop({ required: true })
//     transaction_id: string;

//     @Prop({ default: 'NA' })
//     coupon: string;

//     @Prop({ required: true, enum: ['pending', 'completed', 'failed'], default: 'pending' })
//     payment_status: string;

//     @Prop({ required: true, type: Date })
//     payment_date: Date;

//     @Prop({ required: true, type: Number })
//     subtotal: number;

//     @Prop({ required: true, type: Number })
//     sgst: number;

//     @Prop({ required: true, type: Number })
//     cgst: number;

//     @Prop({ required: true, type: Number })
//     discount: number;

//     @Prop({ required: true, type: Number })
//     grandtotal: number;
// }

// export const PaymentSchema = SchemaFactory.createForClass(Payment);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Payment {
    @Prop({ required: true, type: Number })  // Explicitly define the type here as Number
    booking_id: number;  // Use a specific type like 'number'

    @Prop({ required: true })
    user_id: string;

    @Prop({ required: true, type: Number })
    amount: number;

    @Prop({ required: true })
    payment_method: string;

    @Prop({ required: true })
    transaction_id: string;

    @Prop({ default: 'NA' })
    coupon: string;

    @Prop({ required: true, enum: ['pending', 'completed', 'failed'], default: 'pending' })
    payment_status: string;

    @Prop({ required: true, type: Date })
    payment_date: Date;

    @Prop({ required: true, type: Number })
    subtotal: number;

    @Prop({ required: true, type: Number })
    sgst: number;

    @Prop({ required: true, type: Number })
    cgst: number;

    @Prop({ required: true, type: Number })
    discount: number;

    @Prop({ required: true, type: Number })
    grandtotal: number;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
