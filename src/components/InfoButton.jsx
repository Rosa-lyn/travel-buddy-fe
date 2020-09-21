import React from "react";
import InfoPopup from "./InfoPopup";
import { IButton } from '../styles/headerStyles';


const InfoButton = () => {
  return (
    <section>
      {/*  opens info popup */}
      <IButton>i</IButton>
      <InfoPopup />
    </section>
  );
};

export default InfoButton;
