import React, { useState } from 'react';
import './filterbar.css'; // Optional for custom styling

const FilterBar = ({ genres, onGenreSelect, onSortChange }) => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortOption, setSortOption] = useState('releaseDate');

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    if (onGenreSelect) {
      onGenreSelect(genre);
    }
  };

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSortOption(selectedSort);
    if (onSortChange) {
      onSortChange(selectedSort);
    }
  };

  return (
    <div className="filter-bar">
      {/* Genre Selection */}
      <div className="filter-bar__genres">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`filter-bar__genre-button ${selectedGenre === genre ? 'active' : ''}`}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Sort Control */}
      <div className="filter-bar__sort">
        <label htmlFor="sort-select" className="filter-bar__sort-label">
          Sort by
        </label>
        <select
          id="sort-select"
          className="filter-bar__sort-select"
          onChange={handleSortChange}
          value={sortOption}
        >
          <option value="releaseDate">Release Date</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;