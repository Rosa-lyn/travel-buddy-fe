import React, { Component } from "react";
import InfoPopup from "./InfoPopup";
import { IButton } from "../styles/PopupStyling.js";

class InfoButton extends Component {
  state = {
    seen: false,
  };
  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };
  render() {
    return (
      <div>
        <div className="btn" onClick={this.togglePop}>
          <IButton>i</IButton>
        </div>
        {this.state.seen ? <InfoPopup togglePop={this.togglePop} /> : null}
      </div>
    );
  }
}

export default InfoButton;
