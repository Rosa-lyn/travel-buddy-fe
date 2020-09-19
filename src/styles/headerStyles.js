import styled from "styled-components";
import { Link } from "@reach/router";

export const FormContainer = styled.header`
width: 90vw;
border-radius: .3rem;
margin: 0;
border: 1px solid #BB6BD9;
position: absolute;
top: 25%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
display: grid;
grid-template-columns: 30px 180px auto 270px 280px 300px 310px 340px;
grid-template-rows: 20px 40px 60px 70px 100px;
`;

export const LogoType = styled.h1`
  font-family: Coiny;
  font-size: 1.1rem;
  grid-column: 2;
  grid-row: 3/5;
`;

export const FormInput = styled.input`
background-color: #C5C5C5;
height: 1.5rem;
width: 65vw;
border-style: none;
border-radius: 0.3rem;
grid-column: 2/7;
grid-row: 6;
 
:: placeholder,
:: -webkit-input-placeholder {
 font-family: inherit;
 font-size: .8rem;
 font-weight: 200;
 color: white;
 padding: 0 0 0 .2rem;
}
: -ms-input-placeholder {
 font-family: inherit;
 font-size: .8rem;
 font-weight: 200;
 color: white;
 padding: 0 0 0 .2rem;
}
`;

export const FormLabel = styled.label`
display: block;
text-align: left;
font-family: helvetica;
font-size: .8rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: .6rem 0 .2rem 0;
grid-column: 2;
grid-row: 6;
`;

export const Button = styled(Link)`
 background-color: #BB6BD9;
 font-family: helvetica;
 font-size: .6rem;
 font-weight: 200;
 color: white;
 border: none;
 border-radius: .2rem;
 height: 1.5rem;
 line-height: 1rem;
 width: 6rem;
 text-decoration: none;
 text-align: center;
 justify-content: center;
`;

export const SignUpTitle = styled.h1`
font-family: helvetica;
font-size: 1.3rem;
font-weight: 200;
color: rgb(63, 63, 63);
`;

export const SignUpLink = styled(Link)`
font-family: helvetica;
font-size: .6rem;
font-weight: 200;
color: #BB6BD9;
`;

export const FindLocationButton = styled.button`
background-color: #C5C5C5;
color: white;
border: none;
border-radius: .2rem;
height: 1.6rem;
line-height: 1.6rem;
width: 1.6rem;
`;

export const IButton = styled.button`
background-color: #C5C5C5;
font-family: coiny;
font-size: .8rem;
font-weight: 300;
color: white;
border: none;
border-radius: 50%;
height: 1.1rem;
line-height: 1.2rem;
width: 1.1rem;
text-decoration: none;
text-align: center;
justify-content: center;
`;