import styled from "styled-components";
import { Link } from "@reach/router";

//centres the control panel
export const OuterContainer = styled.body` height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

//the control panel containing the controls
export const Container = styled.header` display: block;
  width: 80vw;
  height: 50px;
  padding: 17px;
  align-items: center;
  border: 1px solid rgb(248, 166, 248);
  border-radius: 3px;
  margin-top: 40px;
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
  font-size: 1.3rem;
  font-weight: 200;
  margin: 0;
  padding: 0;
`;

//this sub-contains the info and signup link
export const InfoSignupContainer = styled.div` display: flex;
justify-content: space-between;
align-items: center;
width: 62px;
` //info button
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
export const SignUpLink = styled(Link)` font-family: helvetica;
font-size: .6rem;
justify-self: flex-start;
align-self: center;
`;
//this contains the search input & findme button
export const SearchFindMeContainer = styled.div` display: grid;
grid-column-gap: .5rem;
grid-template-columns: 7fr 1fr;
height: 40px;
width: 80vw;
`;

//the search form
export const FormInput = styled.input` height: 40px;
font-family: Arial, Helvetica, sans-serif;
font-size: .5rem;
background-color: #C5C5C5;
height: 1.5rem;
width: 40vw;
border-radius: 3px;
grid-column: 1/2;
border: none;
justify-self: start;

:: placeholder,
:: -webkit-input-placeholder {
	font-family: inherit;
	font-size: .5rem;
	font-weight: 200;
	color: white;
	padding: 0 0 0 .2rem;
}

: -ms-input-placeholder {
	font-family: inherit;
	font-size: .5rem;
	font-weight: 200;
	color: white;
	padding: 0 0 0 .2rem;
}
`;

export const SearchButton = styled.button`
  width: 26px;
  height: 26px;
  background: #BB6BD9;
  text-align: center;
  color: #fff;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 11px;
  grid-column: 2/3;
  margin: 0 0 0 5px;

  :focus {
    outline: 0;
  }
`;

export const FindMeButton = styled.button` background-color: lightgray;
width: 40px;
height: 40px;
border-radius: 3px;
background-color: #C5C5C5;
color: white;
border: none;
height: 1.6rem;
line-height: 1.6rem;
width: 1.6rem;
grid-column: 3/4;
justify-self: end;
`;

//search bar new css

// export const SearchWrapper = styled.div`
//   width: 50%;
//   margin: 0 auto 1em;
// `;
// export const SearchForm = styled.div`
//     width: 100%;
//   position: relative;
//   display: flex;
// `;

// export const SearchInput = styled.div`
//   width: 100%;
//   border: 3px solid pink;
//   border-right: none;
//   padding: 5px;
//   height: 36px;
//   border-radius: 5px 0 0 5px;
//   outline: none;
//   color: #9DBFAF;
//   -moz-appearance: none;/* older firefox */
//   -webkit-appearance: none; /* safari, chrome, edge and ie mobile */
//   appearance: none;

// :focus {
//   color: #70c5b5;
// }
// `;




