import Card from "../Card";

export default function Cards({ characters, onClose, id }) {
  return (
    <div>
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
