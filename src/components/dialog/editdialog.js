import React, { useState } from 'react';
import Dialog from './dialog'; // Assuming Dialog from the previous implementation
import './editdialog.css'; // Custom styles for Edit Movie dialog

const EditMovieDialog = ({ movie, onClose }) => {
  const [formData, setFormData] = useState({
    title: movie.title || '',
    releaseDate: movie.releaseDate || '',
    movieUrl: movie.movieUrl || '',
    rating: movie.rating || '',
    genre: movie.genre || '',
    runtime: movie.runtime || '',
    overview: movie.overview || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      title: movie.title || '',
      releaseDate: movie.releaseDate || '',
      movieUrl: movie.movieUrl || '',
      rating: movie.rating || '',
      genre: movie.genre || '',
      runtime: movie.runtime || '',
      overview: movie.overview || '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Movie Details:', formData);
    onClose();
  };

  return (
    <Dialog title="Edit Movie" onClose={onClose}>
      <form className="edit-movie-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>TITLE</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>RELEASE DATE</label>
          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>MOVIE URL</label>
          <input
            type="url"
            name="movieUrl"
            value={formData.movieUrl}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>RATING</label>
          <input
            type="number"
            name="rating"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>GENRE</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          >
            <option>Select Genre</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
          </select>
        </div>

        <div className="form-group">
          <label>RUNTIME</label>
          <input
            type="text"
            name="runtime"
            value={formData.runtime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label>OVERVIEW</label>
          <textarea
            name="overview"
            value={formData.overview}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" className="reset-btn" onClick={handleReset}>
            RESET
          </button>
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default EditMovieDialog;