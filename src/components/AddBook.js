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
    <div className="bookAdding">
      <h2 className="addNewBook">ADD NEW BOOKS</h2>
      <form onSubmit={addBookHandler} className="formAdd">
        <input type="text" value={titleName} onInput={(e) => setTitle(e.target.value)} placeholder="Book title" required="" className="inputTitles" />
        <input type="text" value={authorName} onInput={(e) => setAuthor(e.target.value)} placeholder="Author" required="" className="inputAuthor" />
        <button type="submit" className="inputAddBtn">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
