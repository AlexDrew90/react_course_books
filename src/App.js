import { useState } from "react";
import BookCreate from "./components/BookCreate";

let App = () => {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log(`Book name is ${title}`);
  };

  return <div>
    <BookCreate onCreate={createBook}/>
  </div>
};

export default App;
