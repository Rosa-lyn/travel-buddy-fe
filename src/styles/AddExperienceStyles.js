import styled from "styled-components";

export const FormContainer = styled.form`
  justify-content: center;   
  width: 90vw;
  display: flex;
  flex-direction: column;
  border-width: 1px;
  border: #BB6BD9 solid 1px;
  border-radius: .3rem;

  margin: 0;
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
font-size: .8rem;
font-weight: 200;
color: rgb(63, 63, 63);
margin: .6rem 0 .2rem 0;

`;

export const FormTitle = styled.h1`
  font-family: helvetica;
  font-size: 1.3rem;
  font-weight: 200;
  color: rgb(63, 63, 63);
`;

export const FormInput = styled.input`
  background-color: #C5C5C5;
  height: 1.5rem;
  width: 80vw;
  border-style: none;  
  border-radius: 0.3rem;

::placeholder,
::-webkit-textarea-placeholder {
  font-family: helvetica;
  font-size: .8rem;
  font-weight: 200;
  color: white;
  padding-left: .2rem;
}
:-ms-textarea-placeholder {
  font-family: helvetica;
  font-size: .8rem;
  font-weight: 200;
  color: white;
  padding-left: .2rem;}
`;

export const FormTextarea = styled.textarea`
background-color: #C5C5C5;
height: 8rem;
width: 80vw;
border-style: none;  
border-radius: 0.3rem;

::placeholder,
  ::-webkit-textarea-placeholder {
    font-family: helvetica;
    font-size: .8rem;
    font-weight: 200;
    color: white;
    padding-left: .2rem;
  }
  :-ms-textarea-placeholder {
    font-family: helvetica;
    font-size: .8rem;
    font-weight: 200;
    color: white;
    padding-left: .2rem;
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
  width: 4.5rem;s
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 80vw;
  justify-content: space-between;
  margin: 1rem 0 1.5rem 0;
`