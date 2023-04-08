import { Link } from "react-router-dom";
import style from "./card.module.css";

export default function Card(props) {
  return (
    <div className={style.container}>
      <img className={style.img} src={props.image} alt={props.name} />
      <div className={style.containerName}>
        <Link to={`/detail/${props.id}`}>
          <p className={style.name}> {props.name} </p>
        </Link>
        <button
          className={style.button}
          onClick={() => props.onClose(props.id)}
        >
          Eliminar
        </button>
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
