import React from 'react';
import BookShow from './BookShow';

const BookList = ({ books, onDelete, onEdit }) => {
    const renderedBooks = books.map((book) => {
        return <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit}></BookShow>
    })

    return (
        <div className='book-list'>
            {renderedBooks}
        </div>
    );
};

export default BookList;