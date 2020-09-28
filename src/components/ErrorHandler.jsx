import React from "react";
import { Link } from "@reach/router";
import Logo from "./Logo";

const ErrorHandler = ({ msg }) => {
  const err = msg ? msg : "Oh no! Something went wrong, sad times...";
  return (

    <section className="error">
      <div className="error-info">
        <Logo />
        <h3>{err}</h3>
        <p>
          To return to the home page click <Link to="/">here</Link>
        </p>
      </div>
    </section>
  );
};

export default ErrorHandler;
