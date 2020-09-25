import React from "react";
import Page from "../styles/Page.js";

import {
  OuterFormContainer,
  FormContainer,
  FormInput,
  FormTitle,
  Button,
  ButtonContainer,
  FormLabel,
  FormInnnerContainer,
  CloseButton,
  // FormFont,
  LogoType,
} from "../styles/loginStyles";

const LoginForm = () => {
  return (
    <Page>
      <LogoType>travel buddy</LogoType>
      <OuterFormContainer>
        <FormContainer>
          {/* div */}
          <FormInnnerContainer>
            {/* div */}
            <CloseButton to="/">x</CloseButton>
            <FormTitle>Login</FormTitle>
            {/* <FormFont> */}
            {/* form */}
            <FormLabel htmlFor="username">Username:</FormLabel>
            {/* label */}
            <FormInput
              type="text"
              placeholder="enter your username"
            ></FormInput>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <FormInput type="password" placeholder="password" />
            <ButtonContainer>
              <Button type="submit" value="login" />
            </ButtonContainer>
            {/* </FormFont> */}
          </FormInnnerContainer>
        </FormContainer>
      </OuterFormContainer>
    </Page>
  );
};

export default LoginForm;
