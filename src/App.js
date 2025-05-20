import './App.css';
import React from 'react';
import NumericComponent from './components/numeric/numeric';
import SearchComponent from './components/searchform/search';
import MovieTile from './components/movietile/movietile';
import Inception from './assets/images/inception.png';
import Avengers from './assets/images/avengers.png';
import Bohemain from './assets/images/bohemain.png';
import Fiction from './assets/images/Picture4.png';
import Fiction1 from './assets/images/Picture5.png';
import Fiction2 from './assets/images/Picture6.png';
import FilterBar from './components/filterbar/filterbar';
const movies = [
  {
    id: 1,
    imageUrl: `${Inception}`,
    name: 'Inception',
    releaseYear: 2010,
    genres: ['Action', 'Sci-Fi', 'Drama'],
  },
  {
    id: 2,
    imageUrl: `${Bohemain}`,
    name: 'The Dark Knight',
    releaseYear: 2008,
    genres: ['Action', 'Crime', 'Drama'],
  },
  {
    id: 3,
    imageUrl: `${Avengers}`,
    name: 'Avengers: War of Infinity',
    releaseYear: 2004,
    genres: ['Action', 'Adventure'],
  },
];

const movie = [
  {
    id: 1,
    imageUrl: `${Fiction}`,
    name: 'Kill Bill: Vol 2',
    releaseYear: 1994,
    genres: ['Oscar Winning Movie'],
  },
  {
    id: 2,
    imageUrl: `${Fiction1}`,
    name: 'Reservoir Dogs',
    releaseYear: 1994,
    genres: ['Oscar Winning Movie'],
  },
  {
    id: 3,
    imageUrl: `${Fiction2}`,
    name: 'Pulp Fiction',
    releaseYear: 2004,
    genres: ['Action', 'Adventure'],
  },
];

function App() {

  const handleSearch = (query) => {
    console.log('Search query:', query);
  };
   const handleTileClick = (movie) => {
    console.log('Movie clicked:', movie.name);
  };

  const handleEdit = (movie) => {
    console.log('Edit movie:', movie.name);
  };

  const handleDelete = (movie) => {
    console.log('Delete movie:', movie.name);
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
    React.createElement(
      'h1',
      { style: { textAlign: 'center' } },
      'Numeric Value Example'
    ),
    React.createElement(
      NumericComponent,
      { initialValue: 10}
    ),
    React.createElement(
      'div',
      null,
      React.createElement(
        'h1',  
        { style: { textAlign: 'center' } },
        'Search for a movie'
      ),
      React.createElement(
        SearchComponent, 
        { initialQuery: 'Avengers', onSearch: handleSearch })
    ),
    <div style={{ backgroundColor: '#1e1e1e', color: 'white', padding: '20px' }}>
      <FilterBar genres={genres} onGenreSelect={handleGenreSelect} onSortChange={handleSortChange} />
      {/* Content for movies can be added below */}
    </div>,
   <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movies.map((movie) => (
        <MovieTile
          key={movie.id}
          movie={movie}
          onClick={handleTileClick}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>,
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movie.map((movie) => (
        <MovieTile
          key={movie.id}
          movie={movie}
          onClick={handleTileClick}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
    
  );
}


export default App;
