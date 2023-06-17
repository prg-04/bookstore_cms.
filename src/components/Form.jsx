import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import SelectCategory from './SelectCategory';
import { categories } from '../Constants/constants';

const Form = ({ setBooks }) => {
  const [selected, setSelected] = useState(categories[0]);
  const formRef = useRef(null);

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
    setBooks((prevBooks) => [...prevBooks, newBook]);
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
        <input className="form__input" type="text" placeholder="Book title" />
        <input className="form__input" type="text" placeholder="Author" />
        <SelectCategory selected={selected} setSelected={setSelected} />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  setBooks: PropTypes.func.isRequired,
};

export default Form;
