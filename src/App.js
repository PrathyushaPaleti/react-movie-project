import logo from './logo.svg';
import './App.css';
import React from 'react';
import NumericComponent from './components/numeric/numeric';

function App() {
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
    )
  );
}


export default App;
