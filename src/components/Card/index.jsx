import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

export function Card(props) {
  const { addFav, removeFav, allCharacters } = props;
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(props.id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  const onDelete = (id) => {
    props.onClose(id);
    removeFav(id);
  };

  useEffect(() => {
    for (let i = 0; i < allCharacters.length; i++) {
      if (allCharacters[i].id === props.id) {
        setIsFav(true);
      }
    }
    // myFavorites.forEach((favorite) => {
    //   if (favorite.id === props.id) {
    //     setIsFav(true);
    //   }
    // });
  }, [allCharacters, props.id]);

  return (
    <div className={style.container}>
      <button className={style.button} onClick={() => onDelete(props.id)}>
        Eliminar
      </button>
      <img className={style.img} src={props.image} alt={props.name} />
      <div className={style.containerName}>
        <Link className={style.name} to={`/detail/${props.id}`}>
          <p className={style.linkName}>{props.name}</p>
        </Link>
        {isFav ? (
          <button className={style.likeButton} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.likeButton} onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>
      <div className={style.data}>
        <span className={style.status}> {props.status} </span>
        <span className={style.species}> {props.species} </span>
        <span className={style.gender}> {props.gender} </span>
        <span className={style.origin}> {props.origin.name} </span>
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

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
