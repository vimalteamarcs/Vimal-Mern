import { HttpStatus, Injectable } from '@nestjs/common';
import { Business, BusinessDocument } from './schema/business.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ApiError, ApiResponse } from 'src/common/response.helper';
import { Coupon } from '../payments/schema/coupon.schema';

@Injectable()
export class BusinessService {
  constructor(

    @InjectModel(Business.name) private readonly businessModel: Model<BusinessDocument>,

  ) { }
  async createbusiness(data: any): Promise<any> {
    try {

      const savedbusiness = await this.businessModel.create(data);

      if (savedbusiness) {
        return new ApiResponse(
          HttpStatus.OK,
          'success',
          'Business Created successfully',
          savedbusiness,
        );
      } else {
        return new ApiResponse(
          HttpStatus.BAD_REQUEST,
          'error',
          'Business not Created',
          [{ path: data }],
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

  async getAllbusinesss(): Promise<any> {
    try {
      const res = await this.businessModel.find();
      if (res && res.length > 0) {
        return new ApiResponse(
          HttpStatus.OK,
          'success',
          'business Fetched successfully',
          res,
        );
      } else {
        return new ApiResponse(
          HttpStatus.BAD_REQUEST,
          'error',
          'business not Fetched',
          [],
        );
      }
    } catch (error) {
      throw new ApiError(error.status, error.name, error.message, []);
    }
  }
  async updateDocuments(data: any): Promise<any> {
    try {

      const business = await this.businessModel.findById(data.id);

      if (!business) {
        return new ApiResponse(
          HttpStatus.NOT_FOUND,
          'error',
          'business not found',
          [],
        );
      }

      // Update document fields if new files are uploaded (file paths are in `data`)
      business.fssai = data.fssai || business.fssai;
      business.gst = data.gst || business.gst;
      business.pancard = data.pancard || business.pancard;

      // Save the updated business
      const savedbusiness = await business.save();

      if (savedbusiness && savedbusiness._id) {
        return new ApiResponse(
          HttpStatus.OK,
          'success',
          'Documents updated successfully',
          savedbusiness,
        );
      } else {
        return new ApiResponse(
          HttpStatus.BAD_REQUEST,
          'error',
          'Documents update failed',
          [],
        );
      }
    } catch (error) {
      throw new ApiError(
        error.status,
        error.name,
        error.message,
        [],
      );
    }
  }


}
