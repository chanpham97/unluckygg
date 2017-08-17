import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
          <Header/>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
