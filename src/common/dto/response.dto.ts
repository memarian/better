import { IsNumber, IsString } from 'class-validator';

export class ResponseDto<T> {
  @IsNumber()
  statusCode: number;

  @IsString()
  message: string;

  @IsString()
  timestamp: string;

  @IsString()
  endpoint: string;

  data: T;

  constructor(statusCode: number, message: string, data: T, endpoint: string) {
    this.statusCode = statusCode;
    this.message = message ?? '';
    this.data = data;
    this.endpoint = endpoint;
    this.timestamp = new Date().toISOString();
  }
}
