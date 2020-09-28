import styled from "styled-components";
import {
  Link
} from "@reach/router";
import {
  device
} from "./@MediaRules.js"

export const OuterFormContainer = styled.div `
  width: 100vw;
  margin: 0;
  position: relative;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;


//the travel buddy logo
export const LogoType = styled.h1`
  display: flex;
  flex-direction: column;
  margin: 0;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Coiny", cursive;
  font-size: 30px;
  font-weight: 200;
  line-height: 25px;
  width: 100px;
  color: #002352;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  border: rgb(248, 166, 248) solid 1px;

  border-radius: .3rem;
  margin: 0;
  position: relative;

  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);


  @media ${device.tablet} { 
    max-width: 530px;
  }

  @media ${device.laptop} { 
    max-width: 600px;
  }

  @media ${device.desktop} {
    max-width: 600px;
  }
`;

export const FormInnnerContainer = styled.div `
text-align: left;
width: 80vw;
display: flex;
flex-direction: column;
border: none;
margin: auto;

@media ${device.tablet} { 
    max-width: 500px;
  }

  @media ${device.laptop} { 
    max-width: 565px;
  }

  @media ${device.desktop} {
    max-width: 565px;
  }
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
  font-size: 1.1rem;

  font-weight: 200;
  color: rgb(63, 63, 63);
  margin: 0;
`;

export const Strapline = styled.p`
  font-family: helvetica;
  font-size: 1rem;
  font-weight: 200;
  color: rgb(63, 63, 63);
  margin: 0 0 15px 0;
`;

// export const FormFont = styled.form `
//   font-family: helvetica;
// `

export const FormInput = styled.input`
  background-color: #c5c5c5;
  height: 1.5rem;
  width: 79vw;
  border-style: none;
  border-radius: .3rem;
  margin: 9px 5px 5px 0;

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

@media ${device.tablet} { 
    max-width: 500px;
  }

  @media ${device.laptop} { 
    max-width: 565px;
  }

  @media ${device.desktop} {
    max-width: 565px;
  }
`;

export const Button = styled.input`
  background-color: #bb6bd9;
  font-family: helvetica;
  font-size: 0.7rem;
  font-weight: 200;
  color: white;
  border: none;
  border-radius: 0.2rem;
  height: 1.2rem;
  width: 4.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

export const CloseButton = styled(Link)`
  font-family: helvetica;
  font-size: 0.8rem;
  font-weight: 200;
  text-decoration: none;
  text-align: right;
  margin: 0.6rem 0 0 0;

  :a {
    color: #bb6bd9;
  }
`;
