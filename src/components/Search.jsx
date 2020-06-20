import React, { useState } from 'react';
import { useStore, useDispatch } from 'react-redux';
import search from '../utils/searchBooks';
import { appLoaded, searchSubmit } from '../actions/actions';

const Search = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { allBooks } = store.getState();

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="search-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          dispatch(appLoaded(false));
          dispatch(searchSubmit(search(searchQuery, allBooks)));
          setSearchQuery('');
          setTimeout(() => {
            dispatch(appLoaded(true));
          }, 250);
        }}
      >
        <label>
          <input
            name="searchQuery"
            onChange={(event) => {
              const query = event.target.value;
              setSearchQuery(query);
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
