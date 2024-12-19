import { Body, Controller, Get, Post } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DeleteUserDto } from './dto/deleteUser.dto';

@Controller('dashboard')
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) { }

    @Get('alluser')
    getAllUsers(): Promise<any> {
        return this.dashboardService.getAllUsers();
    }

    @Post('deleteuser')
    deleteUserById(@Body() deleteUserDto: DeleteUserDto): Promise<any> {
        console.log(deleteUserDto.id);

        return this.dashboardService.deleteuserbyid(deleteUserDto.id);
    }
}
