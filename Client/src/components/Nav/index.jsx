import React from "react";
import style from "./nav.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

export default function Nav({ onSearch, randomChar, logOut }) {
  return (
    <div className={style.containerNav}>
      <div className={style.nav}>
        <div className={style.buttonsLeft}>
          <button className={style.buttonsHome}>
            <Link className={style.link} to="/home">
              Home
            </Link>
          </button>
          <button className={style.buttonsHome}>
            <Link className={style.link} to="/favorites">
              Favorites
            </Link>
          </button>
          <button className={style.buttonsAbout}>
            <Link className={style.link} to="/about">
              About
            </Link>
          </button>
        </div>
        <div className={style.searchBarContainer}>
          <SearchBar onSearch={onSearch} />
          <button className={style.randomButton} onClick={randomChar}>
            {" "}
            RamdonChar{" "}
          </button>
        </div>
        <button className={style.buttonLogOut} onClick={logOut}>
          Log out
        </button>
      </div>
    </div>
  );
}
