import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  title,
  author,
  category,
  id,
}) => {
  const dispatch = useDispatch();
  const categoryName = category.name;

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li key={id} className="book">
      <div className="book__info">
        <h4>{categoryName}</h4>
        <h2>{title}</h2>
        <h6>{author}</h6>
        <div className="book__interaction">
          <button type="button" className="book__btn">
            Comments
          </button>
          <button type="button" className="book__btn" onClick={handleRemove}>
            Remove
          </button>
          <button type="button" className="book__btn">
            Edit
          </button>
        </div>
      </div>
      <div className="book__percentage">
        <CircularProgressbar value={64} />
        <div className="percent">
          <h5>
            {64}
            %
          </h5>
          <p>Completed</p>
        </div>
      </div>
      <div className="book__progress">
        <h4>CURRENT CHAPTER</h4>
        <h5>CHAPTER 15</h5>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
