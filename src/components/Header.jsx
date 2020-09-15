import React from "react";
import Search from "./Search";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import SignUpButton from "./SignUpButton";
import FindLocation from "./FindLocation";
import InfoButton from "./InfoButton";

const Header = () => {
  return (
    <header>
      <p>Travel Buddy</p>
      <Logo />
      <Search />
      <LoginButton />
      <SignUpButton />
      <FindLocation />
      <InfoButton />
    </header>
  );
};

export default Header;
