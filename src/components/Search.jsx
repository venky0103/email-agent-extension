import React, { useState } from 'react';
import '../styles.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Search functionality will be implemented later
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Give a prompt to search your emails"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
          className="primary-button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search; 