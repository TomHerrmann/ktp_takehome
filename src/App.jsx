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
        {/* search bar */}
        {/* new book button */}
        {/* book cards */}
      </div>
    </div>
  );
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
