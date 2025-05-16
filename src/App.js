import './App.css';
import React from 'react';
import NumericComponent from './components/numeric/numeric';
import SearchComponent from './components/searchform/search';

function App() {

  const handleSearch = (query) => {
    console.log('Search query:', query);
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
    )
  );
}


export default App;
