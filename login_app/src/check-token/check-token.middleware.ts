import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CheckTokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']; // Token is typically sent in the Authorization header

    if (!token) {
      throw new UnauthorizedException('Token is missing');
    }


    const [bearer, tokenValue] = token.split(' ');
    if (!tokenValue) {
      throw new UnauthorizedException('Token is missing');
    }


    next();
  }
}
