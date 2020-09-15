import React, { Component } from "react";
import { navigate } from "@reach/router";

class SignUpForm extends Component {
  handleSubmit = () => {
    navigate("/signupsuccess");
  };
  render() {
    return (
      <section>
        <h1>sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export default SignUpForm;
