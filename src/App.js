import { useState } from 'react';
import './App.css';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books,
    {
      id: Math.round(Math.random() * 9999),
      title,
    }];
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <h1>App</h1>
      {books.length}
      <BookCreate onCreate={createBook}></BookCreate>
    </div>
  );
}

export default App;
