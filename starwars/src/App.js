import React, { Component } from 'react';
import Characters from './components/Characters';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starWarsChars: [],
      currentItem: {
        name: '',
        homeworld: '',
        species: '',
        films: '',
      }
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starWarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  filterTraits = key => {
    const filtered = this.state.getCharacters.filter(trait => {
      return trait.key === key
    })
    this.setState({ starWarsChars: filtered })
  }
 

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Characters 
          filteredChars = {this.state.filtered}
          characters={this.state.starWarsChars} 
        />  
      </div>
    );
  }
}

export default App;
