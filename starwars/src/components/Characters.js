import React, {Component} from 'react';

const Characters = props => {
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>
                <ul><strong>{props.character.name}'s homeworld:</strong> {props.character.homeworld}</ul>
                <ul><strong>species:</strong> {props.character.species}</ul>
        </div>
        
    )
}

export default Characters;
