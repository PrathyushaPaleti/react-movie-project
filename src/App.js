import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilterBar from './components/filterbar/filterbar';
import HeroImage from './components/heroimage/heroimage';
import MoviesList from './components/movietile/movielist';
import './App.css';

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

  return (
      <Router>
        <Routes>
          {/* Define the root route */}
          <Route
            path="/"
            element={
              <>
                <div>
                  <HeroImage onAddMovie={handleAddMovie} />
                </div>
                <div style={{ backgroundColor: '#1e1e1e', color: 'white', padding: '20px' }}>
                  <FilterBar genres={genres} onGenreSelect={handleGenreSelect} onSortChange={handleSortChange} />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <MoviesList />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    );
}


export default App;