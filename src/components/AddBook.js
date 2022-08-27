import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as rid } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [titleName, setTitle] = useState('');
  const [authorName, setAuthor] = useState('');
  const addBookHandler = (e) => {
    e.preventDefault();
    const book = {
      id: rid(),
      title: titleName,
      author: authorName,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={addBookHandler}>
      <input type="text" value={titleName} onInput={(e) => setTitle(e.target.value)} placeholder="Book title" required="" />
      <input type="text" value={authorName} onInput={(e) => setAuthor(e.target.value)} placeholder="Author" required="" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
