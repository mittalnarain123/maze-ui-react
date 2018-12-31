import React, { Component } from 'react';
import './App.css';

import Maze from './maze/maze';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Maze></Maze>
      </div>
    );
  }
}

export default App;
