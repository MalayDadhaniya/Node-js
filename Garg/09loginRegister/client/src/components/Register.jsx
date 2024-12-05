import React from "react";
import style from "./Register.module.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", { username, email, password })
      .then(() => console.log("Data inserted"))
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.mainContainer}>
      <form onSubmit={handleOnSubmit}>
        <h1 style={{ color: "white" }}>Register </h1>
        <br />
        <label htmlFor="username">User Name : </label>
        <input
          type="text"
          placeholder="Enter Name"
          id="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="email">Email Address : </label>
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">User Password : </label>
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
