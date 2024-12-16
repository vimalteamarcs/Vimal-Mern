import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { AllRoles } from './schemas/allroles.schema';

@Injectable()
export class DashboardService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(AllRoles.name) private allRolesModel: Model<AllRoles>,
    ) { }
    async getAllUsers() {
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
        ]);

        return users;
    }
}
