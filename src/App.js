import { useState } from "react";
import BookCreate from "./components/BookCreate";

let App = () => {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {

    const updatedBooks = [ ...books, {id: 123, title}];
    setBooks(updatedBooks);
    console.log(books);
  };

  return <div>
    {books.length}
    <BookCreate onCreate={createBook}/>
  </div>
};

export default App;
