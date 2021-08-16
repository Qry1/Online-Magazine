import Joi from 'joi';

export const userUpdate = Joi.object().keys({
  firstName: Joi.string()
    .label('First name')
    .min(1)
    .max(20)
    .regex(/^[a-zA-Z]+$/)
    .messages({
      'string.base': `Invalid type. First name must be a string`,
      'string.empty': `Please enter your First name`,
      'string.pattern.base': `First name must consists of letters only`,
      'string.min': `First name should have a minimum length of {#limit}`,
      'string.max': `First name should have a maximum length of {#limit}`,
      'any.required': `First name is a required field`,
    }),
  lastName: Joi.string()
    .label('Last name')
    .min(1)
    .max(30)
    .regex(/^[a-zA-Z]+$/)
    .messages({
      'string.base': `Invalid type. Last name must be a string`,
      'string.empty': `Please enter your last name`,
      'string.min': `Last name should have a minimum length of {#limit}`,
      'string.max': `Last name should have a maximum length of {#limit}`,
      'any.required': `Last name is a required field`,
    }),
  email: Joi.string().label('Email').email().messages({
    'string.base': `Invalid type. Email must be a string`,
    'string.email': `Email must be valid`,
    'string.empty': `Please enter your email`,
    'any.required': `Email is a required field`,
  }),
  password: Joi.string().label('Password').min(6).max(12).messages({
    'string.empty': `Please enter your password`,
    'string.min': `Password should have a minimum length of {#limit}`,
    'string.max': `Password should have a maximum length of {#limit}`,
    'any.required': `Password is a required field`,
  }),
});
