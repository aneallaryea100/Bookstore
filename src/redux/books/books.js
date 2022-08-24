const ADD_BOOKS = 'BOOKSTORE/books/ADD_BOOKS';
const REMOVE_BOOKS = 'BOOKSTORE/books/REMOVE_BOOKS';

const defaultArray = [];

const bookReducer = (state = defaultArray, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return {
        type: ADD_BOOKS,
      };

    case REMOVE_BOOKS:
      return {
        type: REMOVE_BOOKS,
      };

    default:
      return state;
  }
};

export const addBooks = () => ({
  type: ADD_BOOKS,
});

export const removeBooks = () => ({
  type: REMOVE_BOOKS,
});

export default bookReducer;
