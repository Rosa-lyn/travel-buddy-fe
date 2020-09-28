import React, { Component } from "react";
import ExperienceMap from "./ExperienceMap";
import * as api from "../utils/api";
import FindLocation from "./FindLocation";
import Search from "./Search";
import { OuterContainer } from "../styles/SearchStyles";

class MapContainer extends Component {
  state = {
    center: [0, 0],
    zoom: 2,
    experiences: [],
    newExperience: null,
    addExperienceClicked: false,
    newPinLocation: null,
    usersCurrentLocation: null,
  };

  getUserLocation = (event) => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        const { coords } = res;
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

  deleteExperience = () => {
    this.setState((currentState) => ({ ...currentState, newExperience: null }));
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
    const { lat, lng } = event.latlng;
    const newExperience = {
      experience_id: null,
      title: null,
      body: null,
      location_lat: lat,
      location_long: lng,
    };
    this.setState({ newExperience, center: [lat, lng], zoom: 18 });
  };
  toggleMapClicked = () => {
    this.setState((currentState) => {
      return {
        ...currentState,
        addExperienceClicked: !currentState.addExperienceClicked,
        newPinLocation: {
          location_lat: currentState.newExperience
            ? currentState.newExperience.location_lat
            : null,
          location_long: currentState.newExperience
            ? currentState.newExperience.location_long
            : null,
        },
      };
    });
  };
  render() {
    const {
      center,
      zoom,
      experiences,
      newExperience,
      newPinLocation,
      addExperienceClicked,
    } = this.state;
    const { loggedInUser } = this.props;
    return (
      <>
        {!addExperienceClicked && (
          <OuterContainer>
            <Search />
            <FindLocation getUserLocation={this.getUserLocation} />
          </OuterContainer>
        )}

        <ExperienceMap
          center={center}
          zoom={zoom}
          experiences={experiences}
          newExperience={newExperience}
          newPinLocation={newPinLocation}
          zoomToExperience={this.zoomToExperience}
          closePopup={this.closePopup}
          addExperience={this.addExperience}
          toggleMapClicked={this.toggleMapClicked}
          addExperienceClicked={addExperienceClicked}
          loggedInUser={loggedInUser}
          deleteExperience={this.deleteExperience}
        />
      </>
    );
  }
}

export default MapContainer;
