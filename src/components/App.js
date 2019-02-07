import React from "react";

import googlebooks from "../api/googlebooks";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

class App extends React.Component {
  state = { books: [] };

  onSearchSubmit = async term => {
    const response = await googlebooks.get("books/v1/volumes", {
      params: { q: term }
    });

    this.setState({ books: response.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
