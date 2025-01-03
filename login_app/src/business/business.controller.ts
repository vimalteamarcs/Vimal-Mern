

import { BadRequestException, Body, Get, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import * as path from 'path';
import { BusinessService } from './business.service';
import { uploadFile } from 'src/common/response.helper';
import { Business } from './schema/business.schema';
import { UpdateDocumentsDto } from './dto/updatedoc.dto';
import { Controller } from '@nestjs/common';


@Controller('business')
export class BusinessController {
    constructor(private readonly businesssService: BusinessService) { }

    @Post('addbusiness')

    async createbusiness(
        @Body() body: any,

    ) {

        const payload = { ...body };

        return await this.businesssService.createbusiness(payload);
    }

    @Get('getallbusiness')
    async findAll(): Promise<any> {
        return await this.businesssService.getAllbusinesss();
    }

    @Put('updatedocs')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'fssai', maxCount: 1 },
        { name: 'gst', maxCount: 1 },
        { name: 'pancard', maxCount: 1 },
        { name: 'aadhar', maxCount: 1 },
    ]),)
    async updateDocuments(
        @Body() body: UpdateDocumentsDto,
        @UploadedFiles() files: { 
            fssai?: Express.Multer.File[]; 
            gst?: Express.Multer.File[]; 
            pancard?: Express.Multer.File[],
            aadhar?: Express.Multer.File[]
         },

    ) {
        if (!files.fssai || files.fssai.length === 0) {
            throw new BadRequestException('FSSAI document is required');
        }
        if (!files.gst || files.gst.length === 0) {
            throw new BadRequestException('GST document is required');
        }
        if (!files.pancard || files.pancard.length === 0) {
            throw new BadRequestException('PAN card document is required');
        }
        if (!files.aadhar || files.aadhar.length === 0) {
            throw new BadRequestException('aadhar card document is required');
        }

        const filePaths = {
            fssai: await uploadFile(files.fssai[0]),
            gst: await uploadFile(files.gst[0]),
            pancard: await uploadFile(files.pancard[0]),
            aadhar: await uploadFile(files.aadhar[0]),
        };

        const payload = { ...body, ...filePaths };

        return await this.businesssService.updateDocuments(payload);
    }
}


