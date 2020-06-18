import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/action';
import * as types from './constants/actionTypes';
import store from './store';

import AddBookButton from './components/AddBookButton.jsx';
import BookCard from './components/BookCard.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import Search from './components/Search.jsx';

import * as enums from './utils/enums';

const mapStateToProps = (store) => {
  return Object.assign({}, store, {});
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ types }, dispatch);

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [formInput, setFormQuery] = useState({
    title: '',
    author: '',
    publisher: '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchAllBooks = async () => {
      console.log('hitting');
      const booksPromise = await fetch(enums.apiURL);
      const books = await booksPromise.json();

      actions.books_populate(books);
      // setIsLoading(false);
    };

    try {
      fetchAllBooks();
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
  }, []);

  console.log('books in state --> ', this.state.books);

  return (
    <main className="app">
      <header className="top-container">
        <h1>Kaplan Books</h1>
        <AddBookButton /> {/* add onClick functionality */}
      </header>
      <section className="main-container">
        <Search /> {/* add onSearch functionality & searchQuery state */}
        <section className="book-container">
          {/* book cards logic / add book object - {title, author, publisher} to state*/}
        </section>
      </section>
    </main>
  );
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
