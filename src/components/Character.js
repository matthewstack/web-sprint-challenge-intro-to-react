import React from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const CardDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
height: auto;
background-color: white;
border-radius: 25px;
padding: 15px;
margin: 10px;
`;

const MovieDiv = styled.div`
width: 75%;
height: auto;
background-color: gold;
border-radius: 25px;
padding: 10px;
margin: 5px;
`;

const Stats = styled.p`
border-radius: 10px;
padding: 5px;
margin: 10px;
background-color: #ff8f39;

`;
const Character = (props) => {
    const {characters} = props
    return (
        <CardContainer>
                  <h1 className="Header">Characters</h1>
            {
            characters.map( character => {
                return(
                    <CardDiv>
                        <h2>{character.name}</h2>
                        <Stats>Birth Year:{character.birth_year}</Stats>
                        <Stats>Height:{character.height}</Stats>
                        <MovieDiv>
                            <h3>Films</h3>
                            {
                                character.films.map( film => {
                                    return ( <p>{film}</p>
                                    )
                                })
                            }
                        </MovieDiv>


                    </CardDiv>
                )
            })
            
            }
        </CardContainer>


    )
}

export default Character;