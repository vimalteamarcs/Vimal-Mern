import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import * as path from 'path';
@Controller('filehandle')
export class FilehandleController {


    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: (req, file, callback) => {
                const now = new Date();
                const formattedDate = now.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                }).replace(/,/g, '').replace(/\s+/g, '_');
                const formattedTime = now.toTimeString().split(' ')[0].replace(/:/g, '_');
                const folderPath = path.join(process.cwd(), `uploads/files/${formattedDate}_${formattedTime}`);

                if (!fs.existsSync(folderPath)) {
                    fs.mkdirSync(folderPath, { recursive: true });
                }
                callback(null, folderPath);
            },
            filename: (req, file, callback) => {
                const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
                const ext = extname(file.originalname);
                const fileName = `${uniqueName}${ext}`;
                callback(null, fileName);
            }
        })
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return { message: 'File uploaded successfully', filePath: file.path };
    }
}


