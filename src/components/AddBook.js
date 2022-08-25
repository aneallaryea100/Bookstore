import React from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;

    dispatch(addBooks(title, author));
  };

  return (
    <form onSubmit={addBookHandler}>
      <input type="text" placeholder="Book title" name="title" />
      <input type="text" placeholder="Author" name="author" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
