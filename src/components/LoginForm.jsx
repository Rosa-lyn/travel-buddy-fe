import React from "react";

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
