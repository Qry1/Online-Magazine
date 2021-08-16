import Joi from 'joi';

export const params = Joi.object().keys({
  id: Joi.number().min(1).required().messages({
    'number.min': `"id" must be larger than or equal to 1`,
    'number.base': `"id" must be a number`,
  }),
});
