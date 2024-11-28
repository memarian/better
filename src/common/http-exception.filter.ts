import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ResponseDto } from './dto/response.dto';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode =
      exception instanceof HttpException ? exception.getStatus() : 500;

    const exceptionMessage = { message: [] };

    Object.assign(exceptionMessage, exception.getResponse());

    if (Array.isArray(exceptionMessage.message))
      Object.assign(exceptionMessage, { message: exceptionMessage.message[0] });

    const errorData: any = null;

    const errorResponse = new ResponseDto(
      statusCode,
      exceptionMessage.message.toString() || exception.message || null,
      errorData,
      request.url,
    );

    response.status(statusCode).json(errorResponse);
  }
}
