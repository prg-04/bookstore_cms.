import React, { useState, useEffect } from 'react';
import Book from './Book';
import Form from './Form';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '5rem',
        }}
      >
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category} // Add category prop here
          />
        ))}
      </ul>
      <Form setBooks={setBooks} />
    </>
  );
};

export default Home;
