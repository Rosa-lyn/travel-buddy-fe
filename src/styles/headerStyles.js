import styled from "styled-components";
import { Link } from "@reach/router";

//centres the control panel
export const OuterContainer = styled.body` 
  height: 65px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

//the control panel containing the controls
export const Container = styled.header` display: block;
  width: 80vw;
  height: 45px;
  padding: 17px;
  align-items: center;
  border: 1px solid rgb(248, 166, 248);
  border-radius: 3px;
  margin-top: 30px;
`;

//first flexbox contains login button
export const LoginContainer = styled.div` display: flex;
  justify-content: flex-end;
`;

//the login button
export const Button = styled(Link)` background-color: #BB6BD9;
  font-family: helvetica;
  font-size: .8rem;
  font-weight: 200;
  color: white;
  border: none;
  border-radius: 3px;
  height: 18px;
  line-height: 12px;
  width: 62px;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  padding-top: 0.5rem;
`;

//this contains the logo, the info button and signup link
export const LogoContainer = styled.div` display: flex;
  justify-content: space-between;
`;

//the travel buddy logo
export const LogoType = styled.h1` font-family: "Coiny",
cursive;
  font-size: 1.5rem;
  font-weight: 200;
  margin: 0;
  padding: 0;
`;

//this sub-contains the info and signup link
export const InfoSignupContainer = styled.div` display: flex;
justify-content: space-between;
align-items: center;
width: 62px;
`;

//info button
export const IButton = styled.button` background-color: lightgray;
border-radius: 50%;
background-color: #C5C5C5;
font-family: 'Times New Roman',
Times,
serif;
font-size: .8rem;
font-weight: 800;
color: white;
border: none;
height: 1.3rem;
line-height: 1rem;
width: 1.3rem;
text-decoration: none;
`;

//signup link
export const SignUpTitle = styled.h1`
/* justify-self: flex-start; */
/* align-self: center; */
`;
export const SignUpLink = styled(Link)` 
  font-family: helvetica;
  font-size: .6rem;
  justify-self: flex-start;
  align-self: center;
  color: #BB6BD9;
`;




