import React from 'react';
import SearchComponent from '../searchform/search'; // Use the provided SearchComponent
import './heroimage.css'; // Custom CSS for the HeroImage design

const HeroImage = ({ onAddMovie }) => {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className="hero-image">
      {/* Header Section */}
      <div className="hero-image__header">
        <h1 className="hero-image__logo">netflixroulette</h1>
        <button className="hero-image__add-movie" onClick={onAddMovie}>
          + ADD MOVIE
        </button>
      </div>

      {/* Content Section */}
      <div className="hero-image__content">
        <h2 className="hero-image__title">FIND YOUR MOVIE</h2>
        <SearchComponent initialQuery="What do you want to watch?" onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default HeroImage;