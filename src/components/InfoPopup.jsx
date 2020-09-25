import React, { Component } from "react";
import {
  InfoContainer,
  InfoTextContainer,
  InfoWrapper,
  InfoClose,
  InfoTextContainerh4,
  InfoTextContainerh5,
} from "../styles/PopupStyling.js";
import SignUpButton from "./SignUpButton";

class InfoPopup extends Component {
  handleClick = () => {
    this.props.togglePop();
  };
  render() {
    return (
      <InfoContainer>
        <InfoWrapper>
          <InfoTextContainer>
            <InfoClose onClick={this.handleClick}>&times; </InfoClose>
            <InfoTextContainerh4>travel buddy</InfoTextContainerh4>
            <InfoTextContainerh5>
              A place where adventures come to life.
            </InfoTextContainerh5>
            <p>
              {" "}
              Explore the hidden gems of travel, brought to you by your fellow
              travelers.{" "}
            </p>
            <p>
              Plan new trips, discover secret spots, and view locals' top tips
              to curate a truly authentic travel experience.{" "}
            </p>
            <p>
              Why not share your experiences and create a record of your travels
              for all to enjoy?
            </p>
            <SignUpButton />
          </InfoTextContainer>
        </InfoWrapper>
      </InfoContainer>
    );
  }
}
export default InfoPopup;
