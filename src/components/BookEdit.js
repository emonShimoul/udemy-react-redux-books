import React, { useState, useContext } from 'react';
import BooksContext from '../context/books';

const BookEdit = ({ book, onSubmit }) => {
    const { editBookById } = useContext(BooksContext);
    const [title, setTitle] = useState(book.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit();
        editBookById(book.id, title);
    }

    return (
        <form onSubmit={handleSubmit} className='book-edit'>
            <label>Title</label>
            <input className='input' value={title} onChange={handleChange} />
            <button className='button is-primary'>
                Save
            </button>
        </form>
    );
};

export default BookEdit;