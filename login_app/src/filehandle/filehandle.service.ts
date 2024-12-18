import { HttpStatus, Injectable } from '@nestjs/common';
import { ApiResponse, uploadFile } from 'src/common/response.helper';

@Injectable()
export class FilehandleService {
    async handleFileUpload(file: Express.Multer.File) {
        try {
            const result = await uploadFile(file);

            return new ApiResponse(
                HttpStatus.OK,
                'success',
                'Users Uploaded successfully',
                [{ "path": result }]
            );
        } catch (error) {
            return new ApiResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                'error',
                'Failed to Upload',
                []
            );
        }
    }
}

