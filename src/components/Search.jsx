import React, { Component } from "react";
import { FormInput, FormLabel } from '../styles/headerStyles';

class Search extends Component {

  render() {

    return (
      <form action="" >
        <FormLabel>search for place or tag</FormLabel>
        <FormInput type="text" placeholder="type place or tag" />
      </form>
    );
  }
};

export default Search;
