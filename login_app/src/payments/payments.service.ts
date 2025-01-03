import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from './schema/payment.schema';
import { ApiError, ApiResponse } from 'src/common/response.helper';
import { Coupon } from './schema/coupon.schema';

@Injectable()
export class PaymentsService {
    constructor(
        @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
        @InjectModel(Coupon.name) private couponModel: Model<Coupon>,
    ) { }

    async createCoupon(user_id: string): Promise<any> {
        try {
            const coupon = new this.couponModel({
                user_id,
                coupon_code: 'FIRST100',
                discount_type: 'percentage',
                discount_amount: 100,
                expiration_date: new Date('2024-12-31T23:59:59Z'),
                status: 'active',
                usage_count: 1,
                redemption_date: null,
                min_purchase_amount: 0,
                applicable_categories: ['all'],
                applicable_products: ['first_registration'],
                created_at: new Date(),
                updated_at: new Date(),
                coupon_source: 'first_registration',
            });
            await coupon.save();
            if (coupon) {
                return new ApiResponse(
                    HttpStatus.OK,
                    'success',
                    'Coupon Created successfully',
                    coupon
                );
            } else {
                return new ApiResponse(
                    HttpStatus.BAD_REQUEST,
                    'error',
                    'Coupon Creatation failed',
                    []
                );
            }
        } catch (error) {
            throw new ApiError(
                error.response.status,
                error.response.name,
                error.response.message,
                []
            );
        }
    }

    async createPayment(paymentDto): Promise<any> {
        const randomBookingId = Math.floor(100000 + Math.random() * 900000);
        const currentDate = new Date();
        const paymentData = {
            ...paymentDto,
            booking_id: randomBookingId,
            payment_date: currentDate,
            payment_status: 'completed'
        };
        try {
            const payment = new this.paymentModel(paymentData);
            await payment.save();
            if (payment) {
                return new ApiResponse(
                    HttpStatus.OK,
                    'success',
                    'payment Created successfully',
                    payment
                );
            } else {
                return new ApiResponse(
                    HttpStatus.BAD_REQUEST,
                    'error',
                    'payment Creatation failed',
                    []
                );
            }
        } catch (error) {
            throw new ApiError(
                error.response.status,
                error.response.name,
                error.response.message,
                []
            );
        }
    }


    async getAllPayments(): Promise<Payment[]> {
        return this.paymentModel.find().exec();
    }

    async getPaymentById(id: string): Promise<Payment> {
        return this.paymentModel.findById(id).exec();
    }

    async updatePayment(id: string, updateDto: any): Promise<Payment> {
        return this.paymentModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
    }

    async deletePayment(id: string): Promise<any> {
        return this.paymentModel.findByIdAndDelete(id).exec();
    }


}
