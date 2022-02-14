import express from 'express';

import { booksControllers } from '../controllers';
import { validationMiddlewares } from '../middlewares';
import {
  correctBookIdValidator,
  createBookValidator,
  fullBookUpdateValidator,
  partialBookUpdateValidator
} from '../validators/books.validator';

const router = express.Router();

router.get('/',
  booksControllers.getBooks);

router.post('/',
  validationMiddlewares.validateBySchema('body', createBookValidator),
  booksControllers.createBook);

router.get('/:id',
  validationMiddlewares.validateBySchema('params', correctBookIdValidator),
  booksControllers.getBookById);

router.patch('/:id',
  validationMiddlewares.validateBySchema('params', correctBookIdValidator),
  validationMiddlewares.validateBySchema('body', partialBookUpdateValidator),
  booksControllers.partialUpdateBook);

router.put('/:id',
  validationMiddlewares.validateBySchema('params', correctBookIdValidator),
  validationMiddlewares.validateBySchema('body', fullBookUpdateValidator),
  booksControllers.fullUpdateBook);

export const booksRouter = router;
