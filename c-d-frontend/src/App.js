import React, { Component } from 'react';
import Track from './components/Track';
import TrackInfo from './components/TrackInfo';

import './App.css';
import Main from './components/Main';

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <div>
          <header>
            C&D
          </header>
          <button>Track</button>
        </div>
        
        <div>
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;
