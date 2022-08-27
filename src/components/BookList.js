import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookList = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="bookListHold">
      <div className="inputDescribe">
        <div className="textTitles">
          <span className="spanName">Action</span>
          <h2 className="titleName">{title}</h2>
          <p className="authorName">{author}</p>
        </div>
        <div className="btnGroup">
          <p className="comments" href="#">Comments</p>
          <button className="delBtn" type="button" onClick={() => (dispatch(removeBook(id)))}>Remove</button>
          <p className="editor" href="#">Edit</p>
        </div>
      </div>
      <div className="percentWays">
        <span className="circlePercent" />
        <div>
          <span className="numPercent">100%</span>
          <span className="completedText">Completed</span>
        </div>
      </div>
      <div className="chapters">
        <span className="chaptersCurrent">Current Chapter</span>
        <p className="chaperWhat">Chapter 17</p>
        <p className="progress">UPDATE PROGRESS</p>
      </div>
    </div>
  );
};

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookList;
