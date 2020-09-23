import React from "react";
import * as api from "../utils/api";



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
} from "../styles/loginStyles";

const LoginForm = () => {
  return (
    <div>
      <LogoContainer>
        <LogoType>travel buddy</LogoType>
      </LogoContainer>
      <FormContainer>
        {/* div */}
        <FormInnnerContainer>
          {/* div */}
          <CloseButton to="/">x</CloseButton>
          <FormTitle>Login</FormTitle>
          <FormFont>
            {/* form */}
            <FormLabel htmlFor="username">Username:</FormLabel>
            {/* label */}
            <FormInput
              type="text"
              placeholder="enter your username"
            ></FormInput>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <FormTextarea type="textarea" placeholder="password" />

            <ButtonContainer>
              {/* div */}

              {/* <AddImageButton to="/addimage">add image</AddImageButton> */}
              <Button type="submit" value="login" />
            </ButtonContainer>
          </FormFont>
        </FormInnnerContainer>
      </FormContainer>
    </div>
  );
};

export default LoginForm;
