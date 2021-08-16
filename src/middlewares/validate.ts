import { Request, Response, NextFunction } from 'express';
import UnprocessableEntityError from '../errors/unprocessable-entity-error';

const validate = (schema: any, validateData: any) => {
  if (schema) {
    const { error } = schema.validate(validateData);

    if (error) {
      throw new UnprocessableEntityError(`${error.details[0].message}`);
    }
  }
};

export default (validateObject: any) => (req: Request, res: Response, next: NextFunction) => {
  try {
    validate(validateObject.body, req.body);
    validate(validateObject.params, req.params);
    validate(validateObject.query, req.query);
  } catch ({ status, message }) {
    res.status(status).json({
      success: false,
      message,
    });
  }

  next();
};
