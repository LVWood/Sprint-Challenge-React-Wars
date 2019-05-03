import React, { Component } from 'react';
import CharacterList from './components/CharacterList';

import './App.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
      starWarsChars: [],
      name: "",
      homeworld: "",
      species: "",
    }
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


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="card-container">
          <div className=".character-card">
            <CharacterList 
              starWarsChars={this.state.starWarsChars} 
              name={this.state.name}
              homeworld={this.state.homeworld}
              species={this.state.species}
            />
          </div>
        </div>

      </div>
    )
  }
}

export default App
