import React from "react";
import { connect } from "react-redux";
import style from "./favorites.module.css";
import Card from "../Card";

export function Favorites({ myFavorites, onClose }) {
  return (
    <div className={style.containerFav}>
      <h2 className={style.title}>Tus Personajes Favoritos</h2>
      {!myFavorites.length && (
        <h2 className={style.title}> No tiene personajes favoritos. </h2>
      )}

      <div className={style.container}>
        {myFavorites.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              gender={character.gender}
              origin={character.origin}
              species={character.species}
              status={character.status}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
