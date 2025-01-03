import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Coupon extends Document {
    @Prop({ required: true })
    user_id: string;

    @Prop({ required: true })
    coupon_code: string;

    @Prop({ required: true })
    discount_type: string;

    @Prop({ required: true })
    discount_amount: number;

    @Prop({ required: true })
    expiration_date: Date;

    @Prop({ required: true })
    status: string;

    @Prop({ required: true })
    usage_count: number;

    @Prop()
    redemption_date: Date;

    @Prop()
    min_purchase_amount: number;

    @Prop([String])
    applicable_categories: string[];

    @Prop([String])
    applicable_products: string[];

    @Prop({ required: true })
    created_at: Date;

    @Prop({ required: true })
    updated_at: Date;

    @Prop({ required: true })
    coupon_source: string;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
