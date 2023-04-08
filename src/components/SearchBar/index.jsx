import { useState } from "react";
import style from "./searchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = ({ target: { value } }) => {
    setId(value);
  };
  const addCharacter = () => {
    onSearch(id);
    setId("");
  };
  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        onChange={handleChange}
        value={id}
      />
      <button className={style.button} onClick={addCharacter}>
        Agregar
      </button>
    </div>
  );
}
