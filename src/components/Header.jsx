import React from "react";
import Search from "./Search";
import Login from "./Login";

const Header = () => {
  return (
    <header>
      <p>Travel Buddy</p>
      <Search />
      <Login />
    </header>
  );
};

export default Header;
