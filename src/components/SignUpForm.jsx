import React, { Component } from "react";
import { navigate } from "@reach/router";
import { SignUpTitle } from '../styles/headerStyles';

class SignUpForm extends Component {
  handleSubmit = () => {
    navigate("/signupsuccess");
  };
  render() {
    return (
      <section>
        <SignUpTitle>sign up</SignUpTitle>
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
