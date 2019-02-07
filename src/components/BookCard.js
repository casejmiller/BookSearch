import "./BookCard.css";
import React from "react";

const BookList = props => {
  return (
    <div className="ui raised card book-card">
      <h3 className="content">{props.bookTitle}</h3>
      <div className="ui slide masked reveal centered small image">
        <img
          src={props.bookPic}
          alt={`${props.bookTitle} book`}
          className="visible content"
        />
        <div className="hidden content">
          <p className="description">{props.bookDesc}</p>
        </div>
      </div>
      <div className="meta">{props.bookAuthor.join(", ")}</div>
    </div>
  );
};

export default BookList;
