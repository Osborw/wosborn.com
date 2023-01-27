import React from 'react';
import alertTriangle from './alert-triangle.svg';
import styled from 'styled-components'
import './App.css';

const WarningImg = styled.img`
  width: 40vmin;
`

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <WarningImg src={alertTriangle} className="App-logo" alt="logo" />
        <h1>Under Construction</h1>
        <p>
          Sorry, Wayne's working hard to build something great
        </p>
      </header>
    </div>
  );
}

export default App;
