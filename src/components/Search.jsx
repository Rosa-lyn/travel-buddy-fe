import React, { Component } from "react";
import { FormInput, SearchButton } from '../styles/headerStyles';

class Search extends Component {

  render() {

    return (
      <>
        <form action="" >
          {/* <FormLabel>search for place or tag</FormLabel> */}
          <FormInput type="text" placeholder="type place or tag eg. Paris or #cafe">
          </FormInput>
          <SearchButton>
            <i class="fa fa-search"></i>
          </SearchButton>
        </form>

      </>
    );
  }
};

export default Search;
