import React, { useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

import BookCard from './components/BookCard.jsx';
import ButtonPrimary from './components/ButtonPrimary.jsx';
import CreateBookModal from './components/CreateBookModal.jsx';
import ErrorModal from './components/ErrorModal.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import Search from './components/Search.jsx';

import * as enums from './utils/enums';
import createBookArray from './utils/createBookArray';

const App = ({
  apiError,
  appLoading,
  booksDisplayAll,
  booksPopulate,
  createModalToggle,
}) => {
  const store = useStore();
  const { displayBooks, isLoading, searchDisplay } = store.getState();

  useEffect(() => {
    const fetchAllBooks = async () => {
      const booksPromise = await fetch(enums.apiURL);

      if (booksPromise.status === 200) {
        const books = await booksPromise.json();
        booksPopulate(createBookArray(books.items));
        appLoading(false);
      } else {
        apiError(booksPromise.status);
      }
    };
    try {
      fetchAllBooks();
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
  }, []);

  const onCreateBookClick = (event) => {
    event.preventDefault();
    createModalToggle();
  };

  const onDisplayAllClick = (event) => {
    event.preventDefault();
    booksDisplayAll();
    setTimeout(() => {
      appLoading(true);
    }, 250);
  };

  return (
    <main className="app">
      <CreateBookModal />
      <ErrorModal />
      <header className="top-container">
        <h1>Books</h1>
        <ButtonPrimary onClick={onCreateBookClick} text={'Create New Book'} />
      </header>
      <section className="body-container">
        <section className="search-container">
          <Search />
          {searchDisplay ? (
            <ButtonPrimary onClick={onDisplayAllClick} text="View All Books" />
          ) : null}
        </section>
        <section className="books-container">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            displayBooks.map((book, index) => (
              <BookCard book={book} key={`${index}` + Date.now()} />
            ))
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
