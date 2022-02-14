
import { Document, model, Model, Schema } from 'mongoose';

import { IBook } from '../../interfaces';
import { dbTablesEnum } from '../../constants/dbTablesEnum';
import { bookStatuses } from '../../constants/bookStatuses';

type BookType = IBook & Document;

const BookSchema: Schema = new Schema<IBook>({
  title: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: false,
    default: bookStatuses.PUBLISHED
  },
  authors: [{ type: String }],
  pageCount: {
    type: Number,
    required: false,
    default: 1
  },
  shortDescription: {
    type: String,
    required: false
  },
  thumbnailUrl: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const Book: Model<BookType> = model<BookType>(dbTablesEnum.book, BookSchema);
