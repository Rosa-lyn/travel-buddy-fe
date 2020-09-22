import React, { Component } from "react";
import ExperienceMap from "./ExperienceMap";
import AddExperience from "./AddExperience";
import * as api from "../utils/api";
import FindLocation from "./FindLocation";
import Search from "./Search";

class MapContainer extends Component {
  state = {
    currentUser: "roz",
    center: [0, 0],
    zoom: 2,
    experiences: [],
    newExperience: null,
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
    const { currentUser } = this.state; // this will probably actually be passed down from App as a prop once backend is implemented
    const { lat, lng } = event.latlng;
    const newExperience = {
      experience_id: "temp_id",
      title: null,
      body: null,
      username: currentUser,
      created_at: Date.now(),
      location_lat: lat,
      location_long: lng,
      likes: 0,
      belongs_to_tag_text: [],
    };
    this.setState({ newExperience, center: [lat, lng], zoom: 18 });
  };
  render() {
    const { center, zoom, experiences, newExperience } = this.state;
    return (
      <section>
        <FindLocation getUserLocation={this.getUserLocation} />
        <Search />
        <ExperienceMap
          center={center}
          zoom={zoom}
          experiences={experiences}
          newExperience={newExperience}
          zoomToExperience={this.zoomToExperience}
          closePopup={this.closePopup}
          addExperience={this.addExperience}
        />
      </section>
    );
  }
}

export default MapContainer;
