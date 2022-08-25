import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from '../AddBook';
import BookList from '../BookList';
import { removeBooks } from '../../redux/books/books';

const Book = () => {
  const bookItems = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {bookItems.map((item) => (
          <>
            <BookList
              key={item.id}
              title={item.title}
              author={item.author}
            />
            <button type="button" onClick={() => (dispatch(removeBooks(item.id)))}>delete</button>

          </>
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Book;
