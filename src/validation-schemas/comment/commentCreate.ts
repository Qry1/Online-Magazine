import Joi from 'joi';

export const commentCreate = Joi.object().keys({
  text: Joi.string().label('Comment').min(1).max(250).messages({
    'string.base': `Invalid type. Comment name must be a string`,
    'string.empty': `Please enter comment`,
    'string.min': `Comment should have a minimum length of {#limit}`,
    'string.max': `Comment should have a maximum length of {#limit}`,
  }),
});
