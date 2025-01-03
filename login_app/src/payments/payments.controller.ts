// import { Controller, Post, Get, Param, Body } from '@nestjs/common';
// import { PaymentsService } from './payments.service';
// import { CreatePaymentDto } from './dto/create-payment.dto';

// @Controller('payments')
// export class PaymentsController {
//     constructor(private readonly paymentsService: PaymentsService) { }

//     @Post()
//     async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
//         return this.paymentsService.createPayment(createPaymentDto);
//     }

//     // @Get()
//     // async getAllPayments() {
//     //     return this.paymentsService.findAllPayments();
//     // }

//     // @Get(':id')
//     // async getPaymentById(@Param('id') id: string) {
//     //     return this.paymentsService.findPaymentById(id);
//     // }
// }
import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payment } from './schema/payment.schema';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreateCouponDto } from './dto/create-coupon.dto';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) { }

    @Post('createpayment')
    async create(@Body() paymentDto: CreatePaymentDto): Promise<any> {
        return this.paymentsService.createPayment(paymentDto);
    }


    @Post('createcoupon')
    async createPayment(@Body() createCouponDto: CreateCouponDto): Promise<any> {

        return this.paymentsService.createCoupon(createCouponDto.user_id);
    }
}

