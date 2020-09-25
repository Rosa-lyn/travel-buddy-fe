import styled from "styled-components";
import { Link } from "@reach/router";

// export const OuterContainer = styled.body`
//   position: relative;
// `;

export const FormContainer = styled.div`
  justify-content: center;
  width: 86vw;
  display: flex;
  flex-direction: column;
  border:  solid 1px rgb(248, 166, 248);
  border-radius: .3rem;
  margin: 50px 0 0 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
`;

export const FormInnnerContainer = styled.div`
text-align: left;
width: 80vw;
display: flex;
flex-direction: column;
border: none;
margin: auto;
`;

export const FormLabel = styled.label`
display: block;
text-align: left;
font-family: helvetica;
font-size: .7rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: .6rem 0 .2rem 0;
`;

export const FormTitle = styled.h1`
font-family: helvetica;
font-size: 1.1rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: 0;
`;

export const FormFont = styled.form`
  font-family: helvetica;
`

export const FormInput = styled.input`
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
  color: #000;
  padding: 0 0 0 .2rem;
}
: -ms-input-placeholder {
  font-family: inherit;
  font-size: .8rem;
  font-weight: 200;
  color: #000;
  padding: 0 0 0 .2rem;
}
`;

export const FormTextarea = styled.textarea`
background-color: #C5C5C5;
height: 8rem;
width: 79vw;
border-style: none;
border-radius: 0.3rem;

:: placeholder,
  :: -webkit-textarea-placeholder {
  font-family: Arial, Helvetica, sans-serif;
  font-size: .8rem;
  font-weight: 200;
  color: #000;
  padding: .2rem .1rem 0 .2rem;
}
  : -ms-textarea-placeholder {
  font-family: Arial, Helvetica, sans-serif;  
  font-size: .8rem;
  font-weight: 200;
  color: #000;
  padding: 0 0 0 .2rem;
}
`;

export const Button = styled.input`
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

export const PostButton = styled.input`
  background-color: #BB6BD9;
  font-family: helvetica;
  font-size: .8rem;
  font-weight: 200;
  color: white;
  border: none;
  border-radius: .2rem;
  height: 1.4rem;
  width: 5rem; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: rgb(63, 63, 63)
`
//FileUpload styles

export const AddImageButton = styled.input`
  background-color: lightgray;
  font-family: helvetica;
  font-size: .8rem;
  font-weight: 400;
  background-color: #f5f5f5;
  color: #1c1c1c;
  border: 1px solid #707070;
  border-radius: .2rem;
  height: 1.3rem;
  line-height: 1.1rem;
  width: 5rem;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  margin: 0 0 15px 0;
`;

export const FileUploadLabel = styled.label`
display: block;
text-align: left;
font-family: helvetica;
font-size: .7rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: .6rem 0 .2rem 0;
`;

export const FileStatus = styled.p`
display: block;
text-align: left;
font-family: helvetica;
font-size: .8rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: .6rem 0 .2rem 0;
`; 

export const FileUploadInput = styled.input`
background-color: #C5C5C5;
height: 1.3rem;
width: 80vw;
border-style: none;
border-radius: 0.3rem;
margin: 0 0 10px 0;

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