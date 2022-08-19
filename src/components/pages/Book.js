import React from 'react';
import PropTypes from 'prop-types';
import AddBook from '../AddBook';
import BookList from '../BookList';

const Book = (props) => {
  const { bookItem } = props;
  return (
    <div>
      <ul>
        {bookItem.map((item) => (
          <BookList
            key={item.id}
            title={item.title}
            author={item.author}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

Book.propTypes = {
  bookItem: PropTypes.string.isRequired,
};

export default Book;
