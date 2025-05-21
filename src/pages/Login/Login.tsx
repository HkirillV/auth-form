import { useState } from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
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
      <button className="login__button" type="submit">
        SIGN IN
      </button>
      <p className="login__sub-title">Or login with</p>
      <div className="login__social">
        <a className="login__social-link" href="/">
          <GrFacebookOption />
        </a>
        <a className="login__social-link" href="/">
          <img
            src="/src/assets/icons/icon-google.png"
            width="24"
            height="24"
            loading="lazy"
            alt="icon-google"
          />
        </a>
      </div>
      <Link className="login__link" to="/register"> Sign Up</Link>
    </div>
  );
};

export default Login;
