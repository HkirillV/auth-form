import React from "react";

import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <h1 className="register__title">Register</h1>
      <form className="register__form">
        <label className="register__label">
          <input className="register__input" type="email" />
        </label>
        <label className="register__label">
          <input className="register__input" type="email" />
        </label>
      </form>
      <button className="register__btn" type="submit">
        Sign Up
      </button>
      <p>
        Already have an account yet?
        <Link to="/login"> Sign In</Link>
      </p>
    </div>
  );
};

export default Register;