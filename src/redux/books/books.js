import { v4 as uuidv4 } from 'uuid';

const ADD_BOOKS = 'BOOKSTORE/books/ADD_BOOKS';
const REMOVE_BOOKS = 'BOOKSTORE/books/REMOVE_BOOKS';

const bookItem = [
  {
    id: uuidv4(),
    title: 'the peoples mind',
    author: 'wickedness',
  },
  {
    id: uuidv4(),
    title: 'the peoples mind',
    author: 'wickedness',
  },
  {
    id: uuidv4(),
    title: 'the peoples mind',
    author: 'wickedness',
  },
];

export const bookReducer = (state = bookItem, action) => {
  const { value } = action;
  switch (action.type) {
    case ADD_BOOKS:
      return [...state, value];

    case REMOVE_BOOKS:
      return state.filter((book) => (book.id !== action.value));

    default:
      return state;
  }
};

export const addBooks = (title, author) => ({
  type: ADD_BOOKS,
  value: {
    id: uuidv4(),
    title,
    author,
  },

});

export const removeBooks = (id) => ({
  type: REMOVE_BOOKS,
  value: id,
});
