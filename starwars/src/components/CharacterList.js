import React from 'react';
import Characters from './Characters';

const CharacterList = props => {
    // console.log(props);
    return (
        <div className="character-list">
            {props.starWarsChars.map(item => (
                <Characters 
                    character={item} 
                    key={item.name} 
                    name={props.name}
                    birth_year={props.birth_year}
                    height={props.height}
                     mass={props.mass}
                    homeworld={props.homeworld}
                    species={props.species}/>
            ))}
        </div>
    )
}

export default CharacterList;