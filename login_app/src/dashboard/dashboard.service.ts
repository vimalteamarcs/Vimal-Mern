import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { AllRoles } from './schemas/allroles.schema';
import { ApiError, ApiResponse } from 'src/common/response.helper';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { Types } from 'mongoose';
@Injectable()
export class DashboardService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(AllRoles.name) private allRolesModel: Model<AllRoles>,
    ) { }

    async getuserbyId(id: any) {
        try {
            const objectId = new Types.ObjectId(id);
            const user = await this.userModel.aggregate([
                { $match: { _id: objectId } },
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


            if (user.length === 0) {
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
                'User retrieved successfully',
                user
            );
        } catch (error) {
            throw new ApiError(
                error.response.status,
                error.response.name,
                error.response.message,
                []
            );
        }

    }

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
            throw new ApiError(
                error.response.status,
                error.response.name,
                error.response.message,
                []
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
            throw new ApiError(
                error.response.status,
                error.response.name,
                error.response.message,
                []
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
            throw new ApiError(
                error.response.status,
                error.response.name,
                error.response.message,
                []
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
            throw new ApiError(
                error.response.status,
                error.response.name,
                error.response.message,
                []
            );
        }
    }



}
