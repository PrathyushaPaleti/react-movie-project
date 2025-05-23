import React, { useState, useEffect } from 'react';
import MovieTile from './movietile'; // Import the MovieTile component
import './movielist.css'; // Optional styling for movie list

const MoviesList = () => {
  const [movies, setMovies] = useState([]); // Initialize with an empty array
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // For API error handling

  // Fetch movies from the API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json(); // Parse the response
        const filteredMovies = (data.data || []).filter(
          (movie) => movie.poster_path // Check if `poster_path` exists
        );
        setMovies(filteredMovies || []); // Use the 'data' field and fallback to empty array
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError(err.message); // Set the error message
      } finally {
        setIsLoading(false); // Stop loading state
      }
    };

    fetchMovies();
  }, []);

  // Handle movie tile actions
  const handleTileClick = (movie) => {
    console.log('Movie clicked:', movie.title);
  };

  const handleEdit = (movie) => {
    console.log('Edit movie:', movie.title);
  };

  const handleDelete = (movie) => {
    console.log('Delete movie:', movie.title);
  };

  return (
    <div className="movies-list">
      {isLoading ? (
        <p className="movies-list__loading">Loading movies...</p>
      ) : error ? (
        <p className="movies-list__error">Error: {error}</p>
      ) : movies.length > 0 ? (
        movies
        .filter((movie) => movie.id !== 269149) 
        .map((movie) => (
          <MovieTile
            key={movie.id}
            movie={{
              imageUrl: movie.poster_path,
              name: movie.title,
              releaseYear: movie.release_date.split('-')[0], // Extract year from date
              genres: movie.genres,
            }}
            onClick={() => handleTileClick(movie)}
            onEdit={() => handleEdit(movie)}
            onDelete={() => handleDelete(movie)}
          />
        ))
      ) : (
        <p className="movies-list__no-movies">No movies found!</p>
      )}
    </div>
  );
};

export default MoviesList;