import { useState, useEffect } from "react";
import axios from 'axios';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

let App = () => {

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
   const response =  await axios.get('http://localhost:3001/books');
   setBooks(response.data);

  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {

    let response = await axios.put(`http://localhost:3001/books/${id}`, {
    title: newTitle,
  })

    const updatedBooks = books.map((book) => {
      if(book.id === id ){
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {

    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((i) => {
      return i.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {

    const response = await axios.post('http://localhost:3001/books', {
      title
    });

    console.log(response);

    const updatedBooks = [ ...books, response.data];
    setBooks(updatedBooks);
    console.log(books);
  };

  return <div className="app">
      <h1>Reading List</h1>
     <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
    <BookCreate onCreate={createBook}/>
  </div>
};

export default App;
