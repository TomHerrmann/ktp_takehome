import React, { useState, useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/action';
import * as types from './constants/actionTypes';
import store from './store';

import BookCard from './components/BookCard.jsx';
import CreateBookButton from './components/CreateBookButton.jsx';
import CreateBookModal from './components/CreateBookModal.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import Search from './components/Search.jsx';

import * as enums from './utils/enums';
import createBookArray from './utils/createBookArray';

const App = ({ booksPopulate }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [formInput, setFormQuery] = useState({
    title: '',
    authors: [],
    publisher: '',
    publishedDate: '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchAllBooks = async () => {
      const booksPromise = await fetch(enums.apiURL);
      const books = await booksPromise.json();

      booksPopulate(createBookArray(books.items));
      setIsLoading(false);
    };

    try {
      fetchAllBooks();
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
  }, []);

  const store = useStore();
  console.log('store --> ', store.getState());
  console.log('books arr from store --> ', store.getState().books);

  return (
    <main className="app">
      <CreateBookModal />
      <header className="top-container">
        <h1>Books</h1>
        <CreateBookButton /> {/* add onClick functionality */}
      </header>
      <section className="body-container">
        <Search /> {/* add onSearch functionality & searchQuery state */}
        <section className="books-container">
          {!isLoading ? (
            store.getState().books.map((book) => <BookCard book={book} />)
          ) : (
            <LoadingSpinner />
          )}
        </section>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
