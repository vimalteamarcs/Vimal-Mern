import { Controller, Get, Param, Post } from '@nestjs/common';
import { DashboardService } from './dashboard.service';


@Controller('dashboard')
export class AllUser {
    constructor(private readonly dashboardService: DashboardService) { }

    @Get('alluser')
    getAllUsers(): Promise<any> {
        return this.dashboardService.getAllUsers();
    }

}
@Controller('user')
export class DashboardController {
    constructor(private readonly dashUserService: DashboardService) { }

    @Post('delete/:id')
    deleteuserbyid(@Param('id') id: any): Promise<any> {
        return this.dashUserService.deleteuserbyid(id);
    }

}
