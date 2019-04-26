import React from 'react';

const Characters = props => {

    return (
    <div className="character-card">
        <div className="character-stats">
        {this.state.charData.map(character => {
            return (
                <div>
                    <h3>{props.characters.name}Name</h3>
                    <ul>
                        <li>{props.characters.homeworld}homeworld</li>
                        <li>{props.characters.species}species</li>
                        <li>{props.characters.films}movies</li>
                    </ul>
                </div>
                )
            })}   
        </div>
    </div>
    )
 }   
  

export default Characters;