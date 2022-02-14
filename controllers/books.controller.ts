import { NextFunction, Request, Response } from 'express';

import { Book } from '../database/models/book.model';
import { statusCodes } from '../constants/statusCodes';

export const booksControllers = {
  async getBooks(req: Request, res: Response, next: NextFunction) {
    try {
      const books = await Book.find();

      res
        .status(statusCodes.SUCCESS)
        .json(books);
    } catch (e) {
      next(e);
    }
  },

  async createBook(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await Book.create({
        ...req.body
      });

      res
        .status(statusCodes.CREATED)
        .json(book);
    } catch (e) {
      next(e);
    }
  },

  async getBookById(req: Request, res: Response,next: NextFunction) {
    try {
      const { id: bookId } = req.params;

      const book = await Book.findOne({
        _id: bookId
      });

      res
        .status(statusCodes.SUCCESS)
        .json(book);
    } catch (e) {
      next(e);
    }
  },

  async partialUpdateBook(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: bookId } = req.params;

      const updatedBook = await Book.findOneAndUpdate(
        {
          _id: bookId
        }, {
          ...req.body
        },
        {
          new: true
        }
      );

      res
        .status(statusCodes.SUCCESS)
        .json(updatedBook);
    } catch (e) {
      next(e);
    }
  },

  async fullUpdateBook(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: bookId } = req.params;

      const updatedBook = await Book.findOneAndUpdate(
        {
          _id: bookId
        },
        {
          ...req.body
        },
        {
          new: true
        }
      );

      res
        .status(statusCodes.SUCCESS)
        .json(updatedBook);
    } catch (e) {
      next(e);
    }
  }
};
