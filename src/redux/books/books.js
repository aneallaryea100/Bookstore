import { createAsyncThunk } from '@reduxjs/toolkit';

import url from '../../components/Api/api';

const START = 'bookstore/books/START_LOADING_BOOK';
const LOAD = 'bookstore/books/LOAD_BOOK';
const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_Book';
const FAIL = 'bookstore/books/LOADING_FAILED_BOOK';

const newBook = {
  item: [],
  loading: false,
  error: null,
};

export const bookReducer = (state = newBook, action = {}) => {
  const remove = (sourceList, value) => {
    const index = sourceList.indexOf(value);
    if (index >= 0 && index < sourceList.length) {
      return [
        ...sourceList.slice(0, index),
        ...sourceList.slice(index + 1),
      ];
    }
    return sourceList;
  };
  const { payload } = action;

  switch (action.type) {
    case 'bookstore/books/LOAD_BOOK/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'bookstore/books/LOAD_BOOK/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: payload.value,
      };
    case 'bookstore/books/ADD_BOOK/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: [...state.item, payload.value],
      };

    case 'bookstore/books/REMOVE_Book/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: remove(state.item, state.item.filter((items) => items.id === payload.value)[0]),
      };

    case FAIL:
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: [],
      };
    default:
      return state;
  }
};

export const loadBookFailed = (result) => ({ type: START, value: result });

const errorHandler = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const loadBook = createAsyncThunk(LOAD, async () => fetch(`${url}/books`)
  .then(errorHandler)
  .then((res) => res.json())
  .then((json) => {
    const books = [];
    Object.entries(json).forEach((key) => {
      const uuid = key[0];
      const { title, author } = key[1][0];
      const book = {
        id: uuid, title, author,
      };
      books.push(book);
    });
    return { value: books };
  })
  .catch((error) => ({ value: error })));

export const addBook = createAsyncThunk(ADD, async (book) => fetch(`${url}/books`, {
  method: 'POST',
  body: JSON.stringify({
    item_id: `${book.id}`,
    title: `${book.title}`,
    author: `${book.author}`,
    category: `${book.category}`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(() => ({ value: book })));

export const removeBook = createAsyncThunk(REMOVE, (id) => fetch(`${url}/books/${id}`, {
  method: 'DELETE',
  body: '',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(() => ({ value: id })));
