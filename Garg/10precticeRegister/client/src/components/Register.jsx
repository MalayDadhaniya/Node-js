import { useState } from "react";
import style from "./Register.module.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const hendleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/register", { name, email, password })
      .then(() => console.log("data added"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={style.mainContainer}>
      <form onSubmit={hendleOnSubmit}>
        <h1>Register</h1>
        <br />
        <label htmlFor="username">Enter Your Name : </label>
        <input
          type="text"
          placeholder="Enter Name"
          id="username"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email">Enter Email Address : </label>
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Enter Your Password : </label>
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className={style.ragisterBtn}>Ragister</button>
      </form>
    </div>
  );
};

export default Register;
