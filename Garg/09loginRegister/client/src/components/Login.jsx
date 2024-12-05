import React, { useState } from "react";
import style from "./Login.module.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", { email, password })
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.mainContainer}>
      <form onSubmit={handleOnSubmit}>
        <h1 style={{ color: "white" }}>Login </h1>
        <br />
        <label htmlFor="email">Email Address : </label>
        <input type="text" placeholder="Enter Email" id="email" />
        <label htmlFor="password">User Password : </label>
        <input type="text" placeholder="Enter Password" id="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
