import { useState } from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import Input from "@/components/ui/Input";

import "./Register.scss";

const Register = () => {
  const [emailValue, setValueEmail] = useState<string>("");
  const [passwordValue, setValuePassword] = useState<string>("");

  return (
    <div className="register">
      <h1 className="register__title">Sign Up</h1>
      <form className="register__form">
        <label className="register__label">
          <Input
            className="register__input"
            type="email"
            name="email"
            value={emailValue}
            onChange={(e) => setValueEmail(e.target.value)}
            placeholder="email"
          />
        </label>
        <label className="register__label">
          <Input
            className="register__input"
            type="password"
            name="password"
            value={passwordValue}
            onChange={(e) => setValuePassword(e.target.value)}
            placeholder="password"
          />
        </label>
      </form>
      <button className="register__button" type="submit">
        SIGN UP
      </button>
      <p className="register__sub-title">Or login with</p>
      <div className="register__social">
        <a className="register__social-link" href="/">
          <GrFacebookOption />
        </a>
        <a className="register__social-link" href="/">
          <img
            src="/src/assets/icons/icon-google.png"
            width="24"
            height="24"
            loading="lazy"
            alt="icon-google"
          />
        </a>
      </div>
      <Link className="register__link" to="/login"> Sign In</Link>
    </div>
  );
};

export default Register;