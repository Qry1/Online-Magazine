import Joi from 'joi';

export const articleUpdate = Joi.object().keys({
  title: Joi.string().label('Title').min(1).max(50).messages({
    'string.base': `Invalid type. Title must be a string`,
    'string.empty': `Please enter title of article`,
    'string.min': `Title should have a minimum length of {#limit}`,
    'string.max': `Title should have a maximum length of {#limit}`,
    'any.required': `Title is a required field`,
  }),
  description: Joi.string().label('Description').min(1).messages({
    'string.base': `Invalid type. Description must be a string`,
    'string.empty': `Please enter description of article`,
    'string.min': `Description should have a minimum length of {#limit}`,
    'any.required': `Description is a required field`,
  }),
  categories: Joi.alternatives().try(Joi.array().items(Joi.number()), Joi.number()).optional(),
});
