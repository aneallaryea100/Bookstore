import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from 'books/books';
import { checkReducer } from 'categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    cartegories: checkReducer,
  },
});

export default store;
