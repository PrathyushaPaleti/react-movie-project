import React, { useState } from 'react';
import './search.css';

const SearchComponent = ({ initialQuery = '', onSearch }) => {
  const [inputValue, setInputValue] = useState(initialQuery);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="search-container" style={{ textAlign: 'center',padding: 10 }}>
      <input
        type="text"
        className="search-input"
        placeholder="What do you want to watch?"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;