import React from "react";

import LoginButton from "./LoginButton";
// import Logo from "./Lsogo";
import SignUpButton from "./SignUpButton";

import InfoButton from "./InfoButton";
import {
  Container,
  OuterContainer,
  InnerContainer,
  LogoContainer,
  LogoType,
  LoginInfoSignupContainer,
  InfoSignupContainer,
} from "../styles/headerStyles";
//styled components for search field
// import { SearchWrapper, SearchForm, SearchButton } from '../styles/headerStyles';

const Header = () => {
  return (
    <OuterContainer>
      <Container>
        <InnerContainer>
          <LogoContainer>
            <LogoType>travel buddy</LogoType>
          </LogoContainer>
          <LoginInfoSignupContainer>
            <LoginButton />
            <InfoSignupContainer>
              <InfoButton />
              <SignUpButton />
            </InfoSignupContainer>
          </LoginInfoSignupContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  );
};

export default Header;
