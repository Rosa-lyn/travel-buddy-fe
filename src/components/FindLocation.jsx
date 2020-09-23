import React from "react";
import { FindMeButton } from "../styles/SearchStyles";

const FindLocation = (props) => {
  const { getUserLocation } = props;
  return (
    <FindMeButton size={16} onClick={getUserLocation}>
      {/* <span role="img" aria-label="compass"> */}
      <i class="far fa-compass" />
      {/* </span> */}
    </FindMeButton>
  );
};

export default FindLocation;
