import React, { Component } from "react";
import ExperienceMap from "./ExperienceMap";
import * as api from "../utils/api";
import FindLocation from "./FindLocation";
import Search from "./Search";
import {
  OuterContainer,
} from "../styles/SearchStyles";

class MapContainer extends Component {
  state = {
    center: [0, 0],
    zoom: 2,
    usersCurrentLocation: [null, null],
    experiences: [],
    newExperience: null,
    addExperienceClicked: false,
  };

  getUserLocation = (event) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const lat = coords.latitude;
        const lng = coords.longitude;
        console.log("getCurrentPosition Success " + lat + lng);
        this.setState({
          center: [lat, lng],
          zoom: 13,
          usersCurrentLocation: [lat, lng],
        });
      },
      (err) => {
        console.error(JSON.stringify(err));
      }
    );
  };

  componentDidMount() {
    this.getUserLocation();
    api
      .getAllExperiences()
      .then((experiences) =>
        this.setState((currentState) => {
          return { ...currentState, experiences };
        })
      )
      .catch((err) => console.error(JSON.stringify(err)));
  }
  zoomToExperience = (event) => {
    const { lat, lng } = event.latlng;
    this.setState({ center: [lat, lng], zoom: 18 });
  };
  closePopup = () => {
    this.setState({ zoom: 14 });
  };
  addExperience = (event) => {
    const { loggedInUser } = this.props;
    const { lat, lng } = event.latlng;
    const newExperience = {
      experience_id: "temp_id",
      title: null,
      body: null,
      username: loggedInUser,
      created_at: Date.now(),
      location_lat: lat,
      location_long: lng,
      likes: 0,
    };
    this.setState({ newExperience, center: [lat, lng], zoom: 18 });
  };
  toggle = () => {
    this.setState((currentState) => {
      return {
        ...currentState,
        addExperienceClicked: !currentState.addExperienceClicked,
      };
    });
  };
  render() {
    const {
      center,
      zoom,
      experiences,
      newExperience,
      addExperienceClicked,
    } = this.state;

    return (
      <>
        <OuterContainer>
          <Search />
          <FindLocation getUserLocation={this.getUserLocation} />
        </OuterContainer>

        <ExperienceMap
          center={center}
          zoom={zoom}
          experiences={experiences}
          newExperience={newExperience}
          zoomToExperience={this.zoomToExperience}
          closePopup={this.closePopup}
          addExperience={this.addExperience}
          toggle={this.toggle}
          addExperienceClicked={addExperienceClicked}
        />
      </>
    );
  }
}

export default MapContainer;
