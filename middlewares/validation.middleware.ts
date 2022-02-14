import { NextFunction, Request, Response } from 'express';

import { CustomError } from '../errors';
import { useJoiValidator } from '../hooks';
import { statusCodes } from '../constants/statusCodes';

export const validationMiddlewares = {
  validateBySchema: (requestObject: string, schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const objectToValidate = req[requestObject];

      const [
        error,
        value
      ] = useJoiValidator(objectToValidate, schema);

      if (error) {
        throw new CustomError(error, statusCodes.BAD_REQUEST);
      }

      req[requestObject] = value;

      next();
    } catch (e) {
      next(e);
    }
  }
};
