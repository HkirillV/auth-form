import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form className="login__form">
        <label className="login__label">
          <input className="login__input" type="email" />
        </label>
        <label className="login__label">
          <input className="login__input" type="email" />
        </label>
      </form>
      <button className="login__btn" type="submit">
        Sign In
      </button>
      <p>
        Don't have an account yet?
        <Link to="/register"> Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
