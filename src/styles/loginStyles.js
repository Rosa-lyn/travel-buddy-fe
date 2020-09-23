import styled from "styled-components";
import {
  Link
} from "@reach/router";

export const FormContainer = styled.div `
justify-content: center;
width: 90vw;
display: flex;
flex-direction: column;
border-width: 1px;
border: #BB6BD9 solid 1px;
border-radius: .3rem;F

margin: 0;
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
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
font-size: .8rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: .6rem 0 .2rem 0;
`;

export const FormTitle = styled.h1 `
font-family: helvetica;
font-size: 1.3rem;
font-weight: 200;
color: rgb(63, 63, 63);
`;

export const FormFont = styled.form `
  font-family: helvetica;
`

export const FormInput = styled.input `
background-color: #C5C5C5;
height: 1.5rem;
width: 79vw;
border-style: none;
border-radius: 0.3rem;

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

export const FormTextarea = styled.textarea `
background-color: #C5C5C5;
height: 1.5rem;
width: 79vw;
border-style: none;
border-radius: 0.3rem;


:: placeholder,
  :: -webkit-textarea-placeholder {
  font-family: helvetica;
  font-size: .8rem;
  font-weight: 200;
  color: white;
  padding: .2rem .1rem 0 .2rem;
}
  : -ms-textarea-placeholder {
  font-family: helvetica;
  font-size: .8rem;
  font-weight: 200;
  color: white;
  padding: 0 0 0 .2rem;
}
`;

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
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`

export const CloseButton = styled(Link)
`
  font-family: helvetica;
  font-size: .8rem;
  font-weight: 200;
  text-decoration: none;
  text-align: right;
  margin: .6rem 0 0 0;
  color: rgb(63, 63, 63)
`
//FileUpload styles

export const ChooseFileButton = styled.input `
  background-color: #BB6BD9;
  font-family: helvetica;
  font-size: .7rem;
  font-weight: 200;
  color: white;
  border: none;
  border-radius: .2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  width: 4.5rem;
  text-decoration: none;
  text-align: center;
  justify-content: center;
`;

export const AddImageButton = styled.input `
  background-color: #BB6BD9;
  font-family: helvetica;
  font-size: .7rem;
  font-weight: 200;
  color: white;
  border: none;
  border-radius: .2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  width: 4.5rem;
  text-decoration: none;
  text-align: center;
  justify-content: center;
`;

export const FileUploadLabel = styled.label `
display: block;
text-align: left;
font-family: helvetica;
font-size: .8rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: .6rem 0 .2rem 0;
`;

export const FileStatus = styled.p `
display: block;
text-align: left;
font-family: helvetica;
font-size: .8rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: .6rem 0 .2rem 0;
`;