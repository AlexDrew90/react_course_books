import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";

let BookList = ( {books, onDelete, onEdit} ) => {
  const value = useContext(BooksContext);
  console.log(value);
  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>
};

export default BookList;
