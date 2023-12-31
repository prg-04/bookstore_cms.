import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import SelectCategory from './SelectCategory';
import { addBook } from '../redux/books/booksSlice';
import { categories } from '../Constants/constants';

const Form = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [selected, setSelected] = useState(categories[0]);
  const handleSubmit = (e, selectedVal) => {
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;
    const id = uuidv4();

    const newBook = {
      title,
      author,
      category: selectedVal,
      id,
    };
    dispatch(addBook(newBook));
    formRef.current.reset();
  };

  return (
    <div style={{ height: '60vh' }} className="form__cont">
      <h3>ADD NEW BOOK</h3>
      <form
        ref={formRef}
        action=""
        className="form"
        onSubmit={(e) => handleSubmit(e, selected)}
      >
        <input
          className="form__input"
          type="text"
          placeholder="Book title"
          required
        />
        <input
          className="form__input"
          type="text"
          placeholder="Author"
          required
        />
        <SelectCategory
          selected={selected}
          setSelected={setSelected}
          required
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default Form;
