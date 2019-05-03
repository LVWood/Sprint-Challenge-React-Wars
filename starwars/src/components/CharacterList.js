import React from 'react';
import Characters from './Characters';

const CharacterList = props => {
    return (
        <div className="character-list">
            {props.starWarsChars.map(item => (
                <Characters 
                    character={item} 
                    key={item.name} 
                    name={props.name}
                    homeworld={props.homeworld}
                    species={props.species}/>
            ))}
        </div>
    )
}

export default CharacterList;