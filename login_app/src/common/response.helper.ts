import * as fs from 'fs';
import * as path from 'path';
import { extname } from 'path';


export async function uploadFile(file: Express.Multer.File): Promise<string> {


  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');



  const folderPath = path.join('uploads', year.toString(), month);


  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }


  const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const ext = extname(file.originalname);
  const fileName = `${uniqueName}${ext}`;


  const filePath = path.join(folderPath, fileName);


  fs.writeFileSync(filePath, file.buffer);

  return filePath;

}

export class ApiResponse<T> {
  statusCode: number;
  status: string;
  message: string;
  data: T;

  constructor(statusCode: number, status: string, message: string, data: T) {
    this.statusCode = statusCode;
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

export class ApiError extends Error {
  statusCode: number;
  errors: any[];
  data: any;
  success: boolean;

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors: any[] = [],
    data: any = null
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.data = data;
    this.success = false;

    
    Error.captureStackTrace(this, this.constructor);
  }
}




 
