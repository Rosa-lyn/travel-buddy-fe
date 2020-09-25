import styled from "styled-components";
import {
  Link
} from "@reach/router";
import {
  device
} from "./@MediaRules.js"

export const FormContainer = styled.div `
justify-content: center;
width: 90vw;
display: flex;
flex-direction: column;
border-width: 1px;
border: #BB6BD9 solid 1px;
border-radius: .3rem;
margin-top: 40px;
position: absolute;
top: 45%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);

@media ${device.tablet} {
 margin-top: 0px;
}
@media ${device.mobileM} {
  top: 30%;
}

`;

export const FormInnnerContainer = styled.div `
text-align: left;
width: 80vw;
display: flex;
flex-direction: column;
border: none;
margin: auto;
`;

export const FormLabel = styled.label `
display: block;
text-align: left;
font-family: helvetica;
font-size: .7rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: 15px 0 0 0;
`;

export const FormTitle = styled.h1 `
font-family: helvetica;
font-size: 1.3rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: 0;
`;

export const Strapline = styled.p `
font-family: helvetica;
font-size: 1rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: 0 0 15px 0;
`;

// export const FormFont = styled.form `
//   font-family: helvetica;
// `

export const FormInput = styled.input `
  background-color: #C5C5C5;
  height: 1.5rem;
  width: 79vw;
  border-style: none;
  border-radius: .3rem;
  margin: 12px 5px 5px 0;

::placeholder,
::-webkit-input-placeholder {
  font-family: inherit;
  font-size: .8rem;
  font-weight: 200;
  color: #002352;
  padding: 0 0 0 .2rem;
}
:-ms-input-placeholder {
  font-family: inherit;
  font-size: .8rem;
  font-weight: 200;
  color: #002352;
  padding: 0 0 0 .2rem;
}
`;

// export const FormTextarea = styled.textarea `
// background-color: #C5C5C5;
// height: 1.5rem;
// width: 79vw;
// border-style: none;
// border-radius: 0.3rem;


// ::placeholder,
//   ::-webkit-textarea-placeholder {
//   font-family: helvetica;
//   font-size: .8rem;
//   font-weight: 200;
//   color: white;
//   padding: .2rem .1rem 0 .2rem;
// }
//   :-ms-textarea-placeholder {
//   font-family: helvetica;
//   font-size: .8rem;
//   font-weight: 200;
//   color: white;
//   padding: 0 0 0 .2rem;
// }
// `;

export const Button = styled.input `
  background-color: #BB6BD9;
  font-family: helvetica;
  font-size: .7rem;
  font-weight: 200;
  color: white;
  border: none;
  border-radius: .2rem;
  height: 1.2rem;
  width: 4.5rem; 
  `;

export const ButtonContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`

export const CloseButton = styled(Link)`
  font-family: helvetica;
  font-size: .8rem;
  font-weight: 200;
  text-decoration: none;
  text-align: right;
  margin: .6rem 0 0 0;
  color: rgb(63, 63, 63);
`;

//the travel buddy logo
export const LogoType = styled.h1 ` font-family: "Coiny",cursive;
  font-size: 30px;
  font-weight: 200;
  line-height: 25px; 
  margin: 0 auto;
   margin-top: 40px;
  padding: 0;
  width: 100px;
  color: #002352;
`;