import Joi from 'joi';

export const categoryCreateUpdate = Joi.object().keys({
  categoryName: Joi.string().label('Category').min(1).max(50).required().messages({
    'string.base': `Invalid type. Category name must be a string`,
    'string.empty': `Please enter category name`,
    'string.min': `Category name should have a minimum length of {#limit}`,
    'string.max': `Category name should have a maximum length of {#limit}`,
    'any.required': `Category name is a required field`,
  }),
});
