import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookList = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={() => (dispatch(removeBook(id)))}>delete</button>
    </div>
  );
};

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookList;
