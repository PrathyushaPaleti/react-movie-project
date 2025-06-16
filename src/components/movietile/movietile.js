import React, { useState } from 'react';
import './movietile.css'; // Optional CSS for styling
import Dialog from '../dialog/dialog';
import EditMovieDialog from '../dialog/editdialog';

const MovieTile = ({ movie, onClick, onEdit, onDelete }) => {
  
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const movie1 = {
      title: 'Moana',
      releaseDate: '2016-11-14',
      movieUrl: 'https://www.moana.com',
      rating: 7.6,
      genre: 'Action',
      runtime: '1h 47min',
      overview:
        'Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island’s fishermen can’t catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti...',
    };
    
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
    const handleDeleteClick = () => {
      setIsDeleteDialogOpen(true);
    };
  
    const handleCloseDialog = () => {
      setIsEditDialogOpen(false);
      setIsDeleteDialogOpen(false);
    };
  
    const handleDeleteConfirm = () => {
      console.log('Movie deleted');
      setIsDeleteDialogOpen(false);
    };

  const [showContextMenu, setShowContextMenu] = useState(false);

  const toggleContextMenu = (e) => {
    e.stopPropagation();
    setShowContextMenu((prevState) => !prevState);
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
            {/* Trigger Actions */}
            <button onClick={() => setIsEditDialogOpen(true)}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>

            {/* Edit Dialog */}
            {isEditDialogOpen && (
              <EditMovieDialog movie={movie1} onClose={() => setIsEditDialogOpen(false)} />
            )}

            {/* Delete Dialog */}
            {isDeleteDialogOpen && (
              <Dialog title="Delete Movie" onClose={handleCloseDialog}>
                <p>Are you sure you want to delete this movie?</p>
                <button onClick={handleDeleteConfirm} style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px' }}>
                  Confirm
                </button>
              </Dialog>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieTile;