import React, { useState } from "react";
import { validate } from "../services/validation";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"> Email </label>
      <input
        onChange={handleChange}
        value={userData.email}
        type="email"
        name="email"
        placeholder="Ingrese su email..."
      />
      {errors.email && <p>{errors.email}</p>}
      <label htmlFor="password"> Contraseña </label>
      <input
        type="text"
        name="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="Ingrese su contraseña..."
      />
      {errors.password && <p>{errors.password}</p>}
      <button type="submit"> Submit </button>
    </form>
  );
}
