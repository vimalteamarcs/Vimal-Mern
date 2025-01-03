import { Body, Controller, Get, Post } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { UpdateUserStatusDto } from './dto/updateuserstatus.dto';
import { UpdateUserFieldsDto } from './dto/update-user-fields.dto';

@Controller('dashboard')
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) { }

    @Get('alluser')
    getAllUsers(): Promise<any> {
        return this.dashboardService.getAllUsers();
    }
    @Post('getuserbyid')
    getuserbyId(@Body() deleteUserDto: DeleteUserDto): Promise<any> {


        return this.dashboardService.getuserbyId(deleteUserDto.id);
    }
    @Post('deleteuser')
    deleteUserById(@Body() deleteUserDto: DeleteUserDto): Promise<any> {


        return this.dashboardService.deleteuserbyid(deleteUserDto.id);
    }
    @Post('updateuserstatus')
    updateUserStatus(@Body() updateuserstatus: UpdateUserStatusDto): Promise<any> {
        return this.dashboardService.updateUserStatus(updateuserstatus.id, updateuserstatus.status);
    }
    // @Post('updateUserFields')
    // updateUserFields(@Body() id: any, fieldsToUpdate: Record<string, any>): Promise<any> {
    //     return this.dashboardService.updateUserFields(id, fieldsToUpdate);
    // }
    @Post('updateUserFields')
    async updateUserFields(
        @Body() updateUserFieldsDto: UpdateUserFieldsDto,
    ): Promise<any> {
        const { id, fieldsToUpdate } = updateUserFieldsDto;

        return await this.dashboardService.updateUserFields(id, fieldsToUpdate);
    }
}
