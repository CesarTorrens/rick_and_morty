import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./detail.module.css";

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
  if (character.name) {
    return (
      <div className={style.container}>
        <img
          className={style.img}
          src={character.image}
          alt={`Imagen de ${character.name}`}
        />
        <div className={style.containerData}>
          <h2 className={style.name}>{character.name}</h2>
          <h4 className={style.status}> STATUS | {character.status} </h4>
          <h4 className={style.gender}> GENDER | {character.gender} </h4>
          <h4 className={style.species}> SPECIE | {character.species} </h4>
          <h4 className={style.origin}> ORIGIN | {character.origin.name} </h4>
        </div>
      </div>
    );
  }
}
