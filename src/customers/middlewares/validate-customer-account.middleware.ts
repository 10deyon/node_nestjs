import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { validacnt } = req.headers;
    console.log('Validate Customer Account');
    console.log(validacnt);
    next();
    //  if (validateAccount) {
    //    next();
    //  } else {
    //    res.status(401).send({ error: 'Account is invalid' });
    //  }
  }
}
