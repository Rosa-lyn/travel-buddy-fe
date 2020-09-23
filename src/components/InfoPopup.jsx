import React, { Component } from "react";
import { InfoContainer, InfoTextContainer } from "../styles/headerStyles";

class InfoPopup extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <InfoContainer>
        <InfoTextContainer>
          <span className="InfoClose" onClick={this.handleClick}>
            &times;{" "}
          </span>
          <h4>Travelbuddy</h4>
          <p>
            User generated content giving hints and tips on the best secret
            experiences on your travels
          </p>
        </InfoTextContainer>
      </InfoContainer>
    );
  }
}
export default InfoPopup;
