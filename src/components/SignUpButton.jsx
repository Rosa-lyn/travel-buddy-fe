import React from "react";
import { Link } from "@reach/router";
import { SignUpLink } from '../styles/headerStyles';

const SignUpButton = () => {
  return <SignUpLink to="/signup">sign up</SignUpLink>;
};

export default SignUpButton;
