import React from 'react';

const Characters = props => {
    return (
        <div className="character-card">
            <div className="container-border">
                <h3>{props.character.name}</h3>
                <p><strong>birth year:</strong> {props.character.birth_year}</p>
                <p><strong>height:</strong> {props.character.height}</p>
                <p><strong>mass:</strong> {props.character.mass}</p>
                <ul><strong>homeworld:</strong> <a href={props.character.homeworld}>{props.character.homeworld}</a></ul>
                <ul><strong>species:</strong> <a href={props.character.species}>{props.character.species}</a></ul>
            </div>
        </div>
        
    )
}

export default Characters;
