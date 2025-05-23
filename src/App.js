import './App.css';
import React from 'react';
import FilterBar from './components/filterbar/filterbar';
import HeroImage from './components/heroimage/heroimage';
import MoviesList from './components/movietile/movielist';

function App() {

  const handleAddMovie = () => {
    console.log('Add movie button clicked');
  };

  const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

  const handleGenreSelect = (genre) => {
    console.log('Selected genre:', genre);
    // Perform filtering actions based on the selected genre
  };

  const handleSortChange = (sortOption) => {
    console.log('Selected sort option:', sortOption);
    // Perform sorting actions based on the selected option
  };  

  return React.createElement(
    'div',
    null,
    <div>
      <HeroImage onAddMovie={handleAddMovie} />
    </div>,
    <div style={{ backgroundColor: '#1e1e1e', color: 'white', padding: '20px' }}>
      <FilterBar genres={genres} onGenreSelect={handleGenreSelect} onSortChange={handleSortChange} />
      {/* Content for movies can be added below */}
    </div>,
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <MoviesList />
    </div>
  );
}


export default App;