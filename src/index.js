import "./index.css";
import React from 'react';
import RactDOM from 'react-dom/client';
import App from './App';
import BooksContext from "./context/books";

const el = document.getElementById('root');
const root = RactDOM.createRoot(el);

root.render(
  <BooksContext.Provider value={5}>
    <App />
  </BooksContext.Provider>
);
