import React, { useState } from 'react';
import './movietile.css'; // Optional CSS for styling

const MovieTile = ({ movie, onClick, onEdit, onDelete }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);

  const toggleContextMenu = (e) => {
    e.stopPropagation();
    setShowContextMenu((prevState) => !prevState);
  };

  const handleEdit = (e) => {
    if (onEdit) onEdit(movie);
    setShowContextMenu(false);
  };

  const handleDelete = (e) => {
    if (onDelete) onDelete(movie);
    setShowContextMenu(false);
  };

  const handleTileClick = () => {
    if (onClick) onClick(movie);
  };

  return (
    <div className="movie-tile" onClick={handleTileClick}>
      <img className="movie-tile__poster" src={movie.imageUrl} alt={movie.name} />
      <div className="movie-tile__info">
        <div className="movie-tile__header">
          <h3 className="movie-tile__name">{movie.name}</h3>
          <span className="movie-tile__year">{movie.releaseYear}</span>
        </div>
        <p className="movie-tile__genres">{movie.genres.join(', ')}</p>
        <button className="movie-tile__menu-button" onClick={toggleContextMenu}>
          &#8942;
        </button>
        {showContextMenu && (
          <div className="movie-tile__context-menu">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieTile;