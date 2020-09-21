import React, { Component } from "react";
import ExperienceMap from "./ExperienceMap";
import AddExperience from "./AddExperience";
import * as api from "../utils/api";

class MapContainer extends Component {
  state = {
    currentUser: "roz",
    center: [0, 0],
    zoom: 2,
    // experiences: [
    //   {
    //     experience_id: 123456789,
    //     title: "Fab place to watch street performers.",
    //     body:
    //       "Saw some great acts here on saturday lunchtime, look out for the guy with the pogo stick, he will blow your mind.",
    //     username: "joey_traveller",
    //     created_at: 1560347936852,
    //     location_lat: 53.96268,
    //     location_long: -1.085605,
    //     likes: 13,
    //     belongs_to_tag_text: ["#streetPerformers", "#outdoorExperience"],
    //   },
    // ],
    experiences: [],
    newExperience: null,
  };
  componentDidMount() {
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
