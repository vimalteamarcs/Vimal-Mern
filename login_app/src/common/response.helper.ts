import * as fs from 'fs';
import * as path from 'path';
import { extname } from 'path';


export async function uploadFile(file: Express.Multer.File): Promise<string> {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).replace(/,/g, '').replace(/\s+/g, '_');
  const formattedTime = now.toTimeString().split(' ')[0].replace(/:/g, '_');
  const folderPath = path.join(process.cwd(), `uploads/files/${formattedDate}_${formattedTime}`);
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
