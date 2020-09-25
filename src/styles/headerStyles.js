import styled from "styled-components";
import { Link } from "@reach/router";

//centres the control panel

export const OuterContainer = styled.div`
  height: 65px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

//the control panel containing the controls
export const Container = styled.header`
  display: block;
  width: 80vw;
  height: 45px;
  padding: 17px;
  align-items: center;
  border: 1px solid rgb(248, 166, 248);
  border-radius: 3px;
  margin-top: 30px;
`;

export const InnerContainer = styled.div`
  width: 75vw;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//first flexbox contains login button
export const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

//the login button
export const Button = styled(Link)`
  background-color: #bb6bd9;
  font-family: helvetica;
  font-size: 0.8rem;
  font-weight: 200;
  color: white;
  border: none;
  border-radius: 3px;
  height: 12px;
  line-height: 6px;
  width: 55px;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  padding-top: 0.5rem;
  margin-top: 3px;
`;

//this contains the logo
export const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
  height: 45px;
`;

//the travel buddy logo
export const LogoType = styled.h1`
  font-family: "Coiny", cursive;
  font-size: 30px;
  font-weight: 200;
  line-height: 25px;
  margin: 0;
  padding: 0;
  width: 100px;
  color: #002352;
`;

//this sub-contains the login, info and signup link
export const LoginInfoSignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-space-between;
  width: 55px;
  height: 50px;
`;

//this sub-contains the info and signup link
export const InfoSignupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55px;
  height: 22px;
`;

//info button
export const IButton = styled.button`
  background-color: lightgray;
  border-radius: 50%;
  background-color: #c5c5c5;
  font-family: "Times New Roman", Times, serif;
  font-size: 0.8rem;
  font-weight: 800;
  color: #002352;
  border: none;
  height: 1.3rem;
  line-height: 1rem;
  width: 1.3rem;
  text-decoration: none;

  :hover {
    background-color: black;
  }
`;

//infopopup container
export const InfoContainer = styled.div`
  width: 20 rem;
  height: 20 rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkgrey;
`;

export const InfoTextContainer = styled.div``;

//signup link
export const SignUpTitle = styled.h1`
  /* justify-self: flex-start; */
  /* align-self: center; */
`;
export const SignUpLink = styled(Link)`
  font-family: helvetica;
  font-size: 0.6rem;
  justify-self: flex-start;
  align-self: center;
  color: #bb6bd9;
`;
