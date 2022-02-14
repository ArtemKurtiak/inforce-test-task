import Joi from 'joi';
import { bookStatuses } from '../constants/bookStatuses';

export const createBookValidator = Joi.object({
  title: Joi
    .string()
    .required(),
  longDescription: Joi
    .string()
    .required(),
  authors: Joi
    .array()
    .items(Joi.string()),
  shortDescription: Joi
    .string()
    .optional(),
  thumbnailUrl: Joi
    .string()
    .required()
});

export const partialBookUpdateValidator = Joi.object({
  title: Joi
    .string(),
  longDescription: Joi
    .string(),
  authors: Joi
    .array()
    .items(Joi.string()),
  shortDescription: Joi
    .string()
    .optional(),
  thumbnailUrl: Joi
    .string()
});

export const fullBookUpdateValidator = Joi.object({
  title: Joi
    .string()
    .required(),
  longDescription: Joi
    .string()
    .required(),
  authors: Joi
    .array()
    .items(Joi.string()),
  shortDescription: Joi
    .string()
    .optional(),
  thumbnailUrl: Joi
    .string()
    .required(),
  status: Joi
    .string()
    .valid(...Object.values(bookStatuses))
    .required()
});

export const correctBookIdValidator = Joi.object({
  id: Joi
    .string()
    .min(24) // default mongodb _id length
    .max(24)
    .required()
});
