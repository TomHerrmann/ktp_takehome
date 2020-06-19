import React from 'react';

const Search = ({ onSearch, searchQuery }) => {
  return (
    <section className="search-container">
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          <input
            name="searchQuery"
            onChange={(event) => {
              onSearch(event);
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
