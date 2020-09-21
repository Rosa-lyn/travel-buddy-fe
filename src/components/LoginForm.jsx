import React from "react";
import * as api from "../utils/api";



const LoginForm = () => {
  return (
    <section>
      <h1>Login</h1>
      <form action="">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <input type="submit" value="login" />
      </form>
    </section>
  );
};

export default LoginForm;
