import express from 'express';
import mongoose from 'mongoose';

require('dotenv').config();

import { booksRouter } from './routers';
import { constants } from './constants';
import { _errorHandler } from './errors';

mongoose.connect(constants.MONGO_URL);

const app = express();

app.use(express.json());

app.use('/api/books', booksRouter);

app.use(_errorHandler);

app.listen(constants.PORT, () => {
  console.log(`Server started on port ${constants.PORT}`);
});

