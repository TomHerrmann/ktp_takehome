import React, { useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

import BookCard from './components/BookCard.jsx';
import CreateBookButton from './components/CreateBookButton.jsx';
import CreateBookModal from './components/CreateBookModal.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import Search from './components/Search.jsx';

import * as enums from './utils/enums';
import createBookArray from './utils/createBookArray';

const App = ({ appLoaded, booksPopulate }) => {
  const store = useStore();
  const { displayBooks, isLoading } = store.getState();

  useEffect(() => {
    const fetchAllBooks = async () => {
      const booksPromise = await fetch(enums.apiURL);
      const books = await booksPromise.json();

      booksPopulate(createBookArray(books.items));
      appLoaded(true);
    };

    try {
      fetchAllBooks();
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
  }, []);

  return (
    <main className="app">
      <CreateBookModal />
      <header className="top-container">
        <h1>Books</h1>
        <CreateBookButton />
      </header>
      <section className="body-container">
        <Search />
        <section className="books-container">
          {isLoading ? (
            displayBooks.map((book) => <BookCard book={book} />)
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
