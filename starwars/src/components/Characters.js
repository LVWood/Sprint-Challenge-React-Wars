import React from 'react';

const Characters = props => {
    return (
    <div className="character-card">
        <div className="character-stats">
            <h3>{props.charData.name}Name</h3>
            <ul>
                <li>{props.charData.homeworld}homeworld</li>
                <li>{props.charData.species}species</li>
                <li>{props.charData.films}movies</li>
            </ul>
        </div>
    </div>
    )
 }   
  

export default Characters;