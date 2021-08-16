import Joi from 'joi';

export const authLogin = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'Invalid type. Email must be a string',
    'string.empty': `Please enter your Email`,
    'string.min': `First name should have a minimum length of {#limit}`,
    'string.max': `First name should have a maximum length of {#limit}`,
  }),
  password: Joi.string().min(6).max(12).required().messages({
    'string.empty': `Please enter your Password`,
    'string.min': `Password should have a minimum length of {#limit}`,
    'string.max': `Password should have a maximum length of {#limit}`,
  }),
});
