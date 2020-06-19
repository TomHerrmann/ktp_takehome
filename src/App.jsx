import React, { useState, useEffect } from 'react';
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

  const [formAuthors, setFormAuthors] = useState([]);
  const [formPublisher, setFormPublisher] = useState('');
  const [formPublishedDate, setFormPublishedDate] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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

  const onInputChange = (event) => {
    const str = event.target.value;
    const field = event.target.name;

    switch (field) {
      case 'formAuthors':
        setFormAuthors(str);
        return;
      case 'formPublishedDate':
        setFormPublishedDate(str);
        return;
      case 'formPublisher':
        setFormPublisher(str);
        return;
      case 'formTitle':
        setFormTitle(str);
        return;
      case 'searchQuery':
        setSearchQuery(str);
        return;
      default:
        return;
    }
  };

  return (
    <main className="app">
      <CreateBookModal onInputChange={onInputChange} />
      <header className="top-container">
        <h1>Books</h1>
        <CreateBookButton /> {/* add onClick functionality */}
      </header>
      <section className="body-container">
        <Search onInputChange={onInputChange} />
        {/* add onSearch functionality & searchQuery state */}
        <section className="books-container">
          {store.getState().appLoaded ? (
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
