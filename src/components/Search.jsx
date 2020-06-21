import React, { useCallback, useState } from 'react';
import { useStore, useDispatch } from 'react-redux';
import search from '../utils/searchBooks';
import { appLoaded, searchSubmit } from '../actions/actions';

const Search = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { allBooks } = store.getState();

  const [searchQuery, setSearchQuery] = useState('');

  const onSearchSubmit = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(appLoaded(false));
      dispatch(searchSubmit(search(searchQuery, allBooks)));
      setSearchQuery('');
      setTimeout(() => {
        dispatch(appLoaded(true));
      }, 250);
    },
    [searchQuery]
  );

  return (
    <section>
      <form onSubmit={onSearchSubmit}>
        <label>
          <input
            name="searchQuery"
            onChange={(event) => {
              const query = event.target.value;
              setSearchQuery(query);
            }}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Search')}
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
