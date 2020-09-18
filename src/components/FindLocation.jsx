import React from "react";
import { FindLocationButton } from '../styles/headerStyles';
import { PlusCircleIcon } from '@primer/octicons-react'

const FindLocation = () => {
  return (
    <FindLocationButton>
      <span role="img" aria-label="compass">
        <PlusCircleIcon size={16} />
      </span>
    </FindLocationButton>
  );
};

export default FindLocation;
