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
  