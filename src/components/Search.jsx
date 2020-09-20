import React, { Component } from "react";
import { FormInput, SearchButton } from '../styles/headerStyles';

class Search extends Component {

  render() {

    return (
      <>
        <form action="" >
          {/* <FormLabel>search for place or tag</FormLabel> */}
          <FormInput type="text" placeholder="type place or tag">
          </FormInput>
        </form>
        <SearchButton>
          <i class="fa fa-search"></i>
        </SearchButton>
      </>
    );
  }
};

export default Search;
