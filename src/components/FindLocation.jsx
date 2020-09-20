import React from "react";
import { FindMeButton } from '../styles/headerStyles';
import { PlusCircleIcon } from '@primer/octicons-react'

const FindLocation = () => {
  return (
    <FindMeButton size={16} >
      <span role="img" aria-label="compass">
        <PlusCircleIcon />
      </span>
    </FindMeButton>
  );
};

export default FindLocation;
