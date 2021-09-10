import React from "react";

const Character = (props) => {
    const {characters} = props
    return (
        <div>
            {
            characters.map( character => {
                return(
                    <div>
                        <h2>{character.name}</h2>
                        <p>Birth Year:{character.birth_year}</p>
                        <p>Height:{character.height}</p>
                        <div>
                            <h3>Films</h3>
                            {
                                character.films.map( film => {
                                    return ( <p>{film}</p>

                                    )
                                })
                            }
                        </div>

                    </div>
                )
            })
            
            }
        </div>


    )
}

export default Character;