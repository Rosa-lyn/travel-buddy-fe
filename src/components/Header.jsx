import React from "react";
import Search from "./Search";
import LoginButton from "./LoginButton";
// import Logo from "./Lsogo";
import SignUpButton from "./SignUpButton";
import FindLocation from "./FindLocation";
import InfoButton from "./InfoButton";
import {
  Container,
  OuterContainer,
  LoginContainer,
  LogoContainer,
  LogoType,
  InfoSignupContainer,
} from "../styles/headerStyles";
//styled components for search field
// import { SearchWrapper, SearchForm, SearchButton } from '../styles/headerStyles';

const Header = () => {
  return (
    <OuterContainer>
      <Container>
        <LoginContainer>
          <LoginButton />
        </LoginContainer>
        <LogoContainer>
          <LogoType>travel buddy</LogoType>
          <InfoSignupContainer>
            <InfoButton />
            <SignUpButton />
          </InfoSignupContainer>
        </LogoContainer>
      </Container>
    </OuterContainer>
  );
};

export default Header;
