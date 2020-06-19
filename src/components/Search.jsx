import React from 'react';
import { useStore, useDispatch } from 'react-redux';
import search from '../utils/searchBooks';
import { appLoaded, searchSubmit } from '../actions/actions';

const Search = ({ onInputChange, searchQuery }) => {
  const dispatch = useDispatch();
  const store = useStore();
  const { allBooks } = store.getState();

  return (
    <section className="search-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(appLoaded(false));
          dispatch(searchSubmit(search(searchQuery, allBooks)));
          dispatch(appLoaded(true));
        }}
      >
        <label>
          <input
            name="searchQuery"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Search"
            type="text"
            value={searchQuery}
          />
        </label>
      </form>
    </section>
  );
};

export default Search;
