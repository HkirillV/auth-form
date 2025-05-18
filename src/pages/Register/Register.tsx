import { useState } from "react";
import { Link } from "react-router-dom";
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
      <p>Or login with</p>
      <p>
        Already have an account yet?
        <Link to="/login"> Sign In</Link>
      </p>
    </div>
  );
};

export default Register;