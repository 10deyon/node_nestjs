import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('VALIDATE CUSTOMER MIDDLEWARE');
    const { authorization } = req.headers;
    console.log(authorization);

    //  if (!authorization) {
    //    return res
    //      .status(403)
    //      .send({ error: 'No authentication token provided' });
    //  }
    next();
  }
}
