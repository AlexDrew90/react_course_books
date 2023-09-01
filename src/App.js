import { useState } from "react";
import BookCreate from "./components/BookCreate";

let App = () => {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {

    const updatedBooks = [ ...books, {
      id: Math.round(Math.random() * 9999 ),
      title}];
    setBooks(updatedBooks);
    console.log(books);
  };

  return <div>
    {books.length}
    <BookCreate onCreate={createBook}/>
  </div>
};

export default App;
