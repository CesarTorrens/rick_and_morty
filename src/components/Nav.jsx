import React from "react";
import SearchBar from "./SearchBar";

export default function Nav({ onSearch, randomChar }) {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button onClick={randomChar}> RamdonChar </button>
    </div>
  );
}
