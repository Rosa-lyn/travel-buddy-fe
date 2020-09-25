import React, { Component } from "react";
import {
  FormInput,
  SearchButton,
  SearchElements,
} from "../styles/SearchStyles";

class Search extends Component {
  render() {
    return (
      <>
        <SearchElements action="">
          {/* <FormLabel>search for place or tag</FormLabel> */}
          <FormInput
            type="text"
            placeholder="type place or tag eg. Paris or #cafe"
          ></FormInput>
          <SearchButton>
            <i className="fa fa-search"></i>
          </SearchButton>
        </SearchElements>
      </>
    );
  }
}

export default Search;
