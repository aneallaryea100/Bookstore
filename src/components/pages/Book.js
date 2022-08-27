import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBook } from '../../redux/books/books';
import AddBook from '../AddBook';
import BookList from '../BookList';

const Book = () => {
  const item = useSelector((state) => state.books);
  const vitor = useDispatch();
  useEffect(() => {
    vitor(loadBook());
  }, []);
  return (
    <>
      <div>
        {item.item.map((data) => (
          <BookList
            key={data.id}
            id={data.id}
            title={data.title}
            author={data.author}
          />
        ))}
      </div>
      <AddBook />
    </>
  );
};

export default Book;
