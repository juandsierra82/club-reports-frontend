import React, { Component } from 'react'
import './App.css'
import ClubsContainer from './components/ClubsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Results</h1>
        </div>
        <ClubsContainer />
      </div>
    );
  }
}

export default App;
