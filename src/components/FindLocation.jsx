import React from "react";
import { FindMeButton } from '../styles/headerStyles';

const FindLocation = () => {
  return (
    <FindMeButton size={16} >
      {/* <span role="img" aria-label="compass"> */}
      <i class="far fa-compass" />
      {/* </span> */}
    </FindMeButton>
  );
};

export default FindLocation;
