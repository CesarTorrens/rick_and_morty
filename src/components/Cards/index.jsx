import Card from "../Card";
import style from "./cards.module.css";

export default function Cards({ characters, onClose, id }) {
  return (
    <div className={style.container}>
      {characters.map((character) => {
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
  );
}
