import React, { useState } from 'react';
import '../styles/extension.css';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', query);
  };

  return (
    <div className="container">
      <h1>Search Emails</h1>
      <form onSubmit={handleSearch} className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search your emails..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="extension-button extension-button-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search; 