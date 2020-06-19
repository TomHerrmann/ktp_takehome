import React from 'react';

const Search = ({ onSearch, searchQuery }) => {
  return (
    <section className="search-container">
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => {
              onSearch(event);
            }}
            value={searchQuery}
          />
        </label>
      </form>
    </section>
  );
};

export default Search;
