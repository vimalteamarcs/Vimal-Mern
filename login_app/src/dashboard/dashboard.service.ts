import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { AllRoles } from './schemas/allroles.schema';
import { ApiResponse } from 'src/common/response.helper';

@Injectable()
export class DashboardService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(AllRoles.name) private allRolesModel: Model<AllRoles>,
    ) { }

    async getAllUsers() {
        try {
            const users = await this.userModel.aggregate([
                {
                    $lookup: {
                        from: 'AllRoles',
                        localField: 'role',
                        foreignField: 'id',
                        as: 'role_details',
                    },
                },
                {
                    $unwind: '$role_details',
                },
                {
                    $project: {
                        name: 1,
                        email: 1,
                        phone: 1,
                        status: 1,
                        role_name: '$role_details.role_name',


                    },
                },

            ]);

            return new ApiResponse(
                HttpStatus.OK,
                'success',
                'Users retrieved successfully',
                users
            );
        } catch (error) {
            return new ApiResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                'error',
                'Failed to retrieve users',
                null
            );
        }
    }

}
