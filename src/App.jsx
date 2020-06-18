import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as types from '../constants/actionTypes';
import store from './store';

import BookCard from './components/BookCard.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import Search from './components/Search.jsx';

const mapStateToProps = (store) => {
  return Object.assign({}, store, {});
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      /* action creators */
    },
    dispatch
  );

const App = () => {
  return (
    <div className="app">
      <div className="title-container">
        <h1>Kaplan Books</h1>
      </div>
      <Search /> {/* add onSearch functionality & searchQuery state */}
      <Button /> {/* add onClick functionality */}
      <div className="book-container">
        {/* book cards logic / add book object - {title, author, publisher} to state*/}
      </div>
    </div>
  );
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
