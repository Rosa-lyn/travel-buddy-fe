import React from "react";
import Search from "./Search";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import SignUpButton from "./SignUpButton";
import FindLocation from "./FindLocation";
import InfoButton from "./InfoButton";
import { FormContainer } from '../styles/headerStyles';

const Header = () => {
  return (
    <FormContainer>
      <Logo />
      <Search />
      <LoginButton />
      <SignUpButton />
      <FindLocation />
      <InfoButton />
    </FormContainer>
  );
};

export default Header;
