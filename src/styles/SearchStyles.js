import styled from "styled-components";

//centres the search panel and find location button
export const OuterContainer = styled.div`
  height: 20px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 25px 0;
`;

//centres the search form and search button
export const SearchElements = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//this contains the search input & findme button
export const SearchFindMeContainer = styled.div`
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-columns: 7fr 1fr;
  height: 40px;
  width: 80vw;
`;

//the search form
export const FormInput = styled.input`
  height: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.6rem;
  font-weight: 600;
  color: #002352;
  background-color: lightgray;
  height: 1.5rem;
  width: 72vw;
  border-radius: 3px;
  grid-column: 1/2;
  border: none;
  justify-self: start;

  :: placeholder,
:: -webkit-input-placeholder {
    font-family: inherit;
    font-size: 0.6rem;
    font-weight: 200;
    color: black;
    padding: 0 0 0 0.3rem;
  }

  :-ms-input-placeholder  {
    font-family: inherit;
    font-size: 0.5rem;
    font-weight: 200;
    color: black;
    padding: 0 0 0 0.3rem;
  }
  :: -moz-input-placeholder {
    font-family: inherit;
    font-size: 0.5rem;
    font-weight: 200;
    color: black;
    padding: 0 0 0 0.3rem;
  }
`;

export const SearchButton = styled.button`
  width: 26px;
  height: 26px;
  background: #bb6bd9;
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

export const FindMeButton = styled.button`
  background-color: lightgray;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background-color: lightgray;
  color: #002352;
  border: none;
  height: 1.6rem;
  line-height: 1.6rem;
  width: 1.6rem;
  grid-column: 3/4;
  justify-self: end;
  margin: 0 0 0 5px;
`;
