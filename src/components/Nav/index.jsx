import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

export default function Nav({ onSearch, randomChar, logOut }) {
  return (
    <div>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/about">About</Link>
      </button>
      <SearchBar onSearch={onSearch} />
      <button onClick={randomChar}> RamdonChar </button>
      <button onClick={logOut}>Log out</button>
    </div>
  );
}
