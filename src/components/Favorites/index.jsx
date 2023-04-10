import React, { useEffect } from "react";
import { connect } from "react-redux";
import style from "./favorites.module.css";
import Card from "../Card";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";

export function Favorites({ myFavorites, onClose, allCharacters }) {
  const [aux, setAux] = React.useState(false);
  const dispatch = useDispatch();

  const handleOrder = (evt) => {
    dispatch(orderCards(evt.target.value));
    setAux(!aux);
  };

  const handleFilter = (evt) => {
    dispatch(filterCards(evt.target.value));
  };
  useEffect(() => {
    dispatch(filterCards("Todos"));
    dispatch(orderCards("D"));
  }, []);
  return (
    <div className={style.containerFav}>
      <h2 className={style.title}>Tus Personajes Favoritos</h2>
      {!myFavorites.length && (
        <h2 className={style.title}> No tiene personajes favoritos. </h2>
      )}
      <select onChange={handleOrder}>
        <option value={"D"}>Descendente</option>
        <option value={"A"}>Ascendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value={"Todos"}>Todos</option>
        <option value={"Male"}>Male</option>
        <option value={"Female"}>Female</option>
        <option value={"Genderless"}>Genderless</option>
        <option value={"unknown"}>unknown</option>
      </select>
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
    allCharacters: state.allCharacters,
  };
};

export default connect(mapStateToProps)(Favorites);
