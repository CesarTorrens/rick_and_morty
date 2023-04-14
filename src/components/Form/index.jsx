import React, { useState } from "react";
import style from "./form.module.css";
import { validate } from "../../services/validation";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(userData);
  };

  return (
    <section className={style.container}>
      <div className={style.containerImg}></div>
      <div className={style.containerForm}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h2 className={style.title}>Rick And Morty APP</h2>
          <h3 className={style.subtitle}>Inicia Sesión</h3>
          <label className={style.label} htmlFor="email">
            {" "}
            Ingrese su Email{" "}
          </label>
          <input
            className={style.input}
            onChange={handleChange}
            value={userData.email}
            type="email"
            name="email"
            placeholder="Ingrese su email..."
          />
          <p className={style.warning}> {errors.email && errors.email} </p>
          <label className={style.label} htmlFor="password">
            {" "}
            Ingrese su Contraseña{" "}
          </label>
          <input
            className={style.input}
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Ingrese su contraseña..."
          />
          <p className={style.warning}>
            {" "}
            {errors.password && errors.password}{" "}
          </p>
          <button type="submit" className={style.button}>
            {" "}
            Iniciar sesión{" "}
          </button>
        </form>
      </div>
    </section>
  );
}
