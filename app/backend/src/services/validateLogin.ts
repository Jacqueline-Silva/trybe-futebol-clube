import * as Joi from 'joi';
import ILogin from './interfaces/ILogin';

const runSchema = (login: ILogin) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).messages({
    'any.required': '{{#label}} is required',
  });
  return schema.validate(login);
};

export default runSchema;
