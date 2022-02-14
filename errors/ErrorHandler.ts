import { NextFunction, Request, Response } from 'express';

import { statusCodes } from '../constants/statusCodes';
import { ICustomError } from '../interfaces';

export const _errorHandler = (err: ICustomError, req: Request, res: Response, _: NextFunction) => {
  const { message = 'Server error', status = statusCodes.SERVER_ERROR } = err;

  res
    .status(status)
    .json({ message });
};
