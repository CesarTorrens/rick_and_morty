import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  console.log(character);
  if (character.name) {
    return (
      <div>
        <h2>{character.name}</h2>
        <img src={character.image} alt={`Imagen de ${character.name}`} />
        <h4> STATUS | {character.status} </h4>
        <h4> GENDER | {character.gender} </h4>
        <h4> SPECIE | {character.species} </h4>
        <h4> ORIGIN | {character.origin.name} </h4>
      </div>
    );
  }
}
