import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@/components/ui/Input";

import "./Login.scss";

const Login = () => {
  const [emailValue, setValueEmail] = useState<string>("");
  const [passwordValue, setValuePassword] = useState<string>("");

  return (
    <div className="login">
      <h1 className="login__title">Sign In</h1>
      <form className="login__form">
        <label className="login__label">
          <Input
            className="login__input"
            type="email"
            name="email"
            value={emailValue}
            onChange={(e) => setValueEmail(e.target.value)}
            placeholder="email"
          />
        </label>
        <label className="login__label">
          <Input
            className="login__input"
            type="password"
            name="password"
            value={passwordValue}
            onChange={(e) => setValuePassword(e.target.value)}
            placeholder="password"
          />
        </label>
      </form>
      <button className="login__btn" type="submit">
        Sign In
      </button>
      <p>
        Already have an account yet?
        <Link to="/register"> Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
