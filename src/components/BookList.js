import "./BookList.css";

import React from "react";
import BookCard from "./BookCard";

const BookList = props => {
  const books = props.books.map(book => {
    return (
      <BookCard
        key={book.id}
        bookTitle={book.volumeInfo.title}
        bookAuthor={book.volumeInfo.authors}
        bookPic={book.volumeInfo.imageLinks.thumbnail}
        bookDesc={book.volumeInfo.description}
      />
    );
  });

  return <div className="ui cards books-list">{books}</div>;
};

export default BookList;
