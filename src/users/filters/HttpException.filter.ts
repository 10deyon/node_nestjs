import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    //  console.log(exception.getResponse());
    //  console.log(exception.getStatus());
    //  console.log(exception);

    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();

    //  response.status(status).json({
    //    statusCode: status,
    //    timestamp: new Date().toISOString(),
    //    path: request.url,
    //  });

    //  response.sendStatus(exception.getStatus());

    response.send({
      status: exception.getStatus(),
      message: exception.getResponse(),
    });
  }
}
