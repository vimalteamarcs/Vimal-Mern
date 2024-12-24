import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { AllRoles } from './schemas/allroles.schema';
import { ApiResponse } from 'src/common/response.helper';
import { DeleteUserDto } from './dto/deleteUser.dto';

@Injectable()
export class DashboardService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(AllRoles.name) private allRolesModel: Model<AllRoles>,
    ) { }

    async getAllUsers() {
        try {
            const users = await this.userModel.aggregate([
                { $match: { status: { $ne: "deleted" } } },
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
    async deleteuserbyid(id: any) {

        try {
            const result = await this.userModel.updateOne(
                { _id: id },
                { $set: { status: "deleted" } }
            );;

            if (!result) {

                return new ApiResponse(
                    HttpStatus.NOT_FOUND,
                    'Not Found',
                    'User not found',
                    []
                );
            }
            return new ApiResponse(
                HttpStatus.OK,
                'success',
                'Users Deleted successfully',
                [{ "_id": id }]
            );
        } catch (error) {
            return new ApiResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                'error',
                'Failed to Deleted user',
                null
            );
        }

    }
    async updateUserStatus(id: any, status: string) {
        try {
            const result = await this.userModel.updateOne(
                { _id: id },
                { $set: { status: status } }
            );

            if (!result || result.matchedCount === 0) {
                return new ApiResponse(
                    HttpStatus.NOT_FOUND,
                    'Not Found',
                    'User not found',
                    []
                );
            }

            return new ApiResponse(
                HttpStatus.OK,
                'success',
                'User status updated successfully',
                [{ "_id": id, "status": status }]
            );
        } catch (error) {
            return new ApiResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                'error',
                'Failed to update user status',
                null
            );
        }
    }
    async updateUserFields(id: any, fieldsToUpdate: Record<string, any>) {
        try {
            const result = await this.userModel.updateOne(
                { _id: id },
                { $set: fieldsToUpdate }
            );

            if (!result || result.matchedCount === 0) {
                return new ApiResponse(
                    HttpStatus.NOT_FOUND,
                    'Not Found',
                    'User not found',
                    []
                );
            }

            return new ApiResponse(
                HttpStatus.OK,
                'success',
                'User fields updated successfully',
                [{ "_id": id, ...fieldsToUpdate }]
            );
        } catch (error) {
            return new ApiResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                'error',
                'Failed to update user fields',
                null
            );
        }
    }



}
