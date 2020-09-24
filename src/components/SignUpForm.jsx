import React, { Component } from "react";
import { navigate } from "@reach/router";

import {
  FormContainer,
  FormInput,
  FormTitle,
  FormTextarea,
  Button,
  ButtonContainer,
  FormLabel,
  FormInnnerContainer,
  CloseButton,
  FormFont,
  LogoContainer,
  LogoType,
} from "../styles/SignUpFormStyles.js";

class SignUpForm extends Component {
  handleSubmit = () => {
    navigate("/signupsuccess");
  };
  render() {
    return (
      <section>
        <LogoContainer>
          <LogoType>travel buddy</LogoType>
        </LogoContainer>
        <FormContainer>
          {/* div */}
          <FormInnnerContainer>
            {/* div */}
            <CloseButton to="/">x</CloseButton>
            <FormTitle>Sign Up</FormTitle>
            <p>It's quick and easy.</p>
            <FormFont>
              {/* form */}
              <FormInput type="text" placeholder="First name"></FormInput>
              <FormInput type="text" placeholder="Surname"></FormInput>
              <FormInput
                type="text"
                placeholder="Mobile number or email address"
              ></FormInput>
              <FormLabel htmlFor="password">
                Create Password (must be at least 8 characters):
              </FormLabel>
              <FormInput type="password" placeholder="password" />

              <ButtonContainer>
                <Button type="submit" value="login" />
              </ButtonContainer>
            </FormFont>
          </FormInnnerContainer>
        </FormContainer>
      </section>
    );
  }
}

export default SignUpForm;
