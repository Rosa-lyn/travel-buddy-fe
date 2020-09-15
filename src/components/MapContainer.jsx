import React, { Component } from "react";
import { Link } from "@reach/router";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MapContainer extends Component {
  state = {
    center: [0, 0],
    zoom: 2,
    experiences: [
      {
        title: "Fab place to watch street performers.",
        body:
          "Saw some great acts here on saturday lunchtime, look out for the guy with the pogo stick, he will blow your mind.",
        username: "joey_traveller",
        created_at: 1560347936852,
        location_lat: 53.96268,
        location_long: -1.085605,
        likes: 13,
        belongs_to_tag_text: ["#streetPerformers", "#outdoorExperience"],
      },
    ],
  };
  zoomToExperience = (event) => {
    const { lat, lng } = event.latlng;
    this.setState({ center: [lat, lng], zoom: 18 });
  };
  closePopup = () => {
    this.setState({ zoom: 14 });
  };
  render() {
    const { center, zoom, experiences } = this.state;
    return (
      <Map className="Map" center={center} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {experiences.map((experience) => {
          console.log(experience);
          const {
            title,
            username,
            location_lat,
            location_long,
            created_at,
          } = experience;
          const markerPosition = [location_lat, location_long];
          return (
            <Marker position={markerPosition} onClick={this.zoomToExperience}>
              <Popup onClose={this.closePopup}>
                <h1>{title}</h1>
                <p>
                  {username} on {created_at}
                </p>
                <Link to="/experience">...read more</Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    );
  }
}

export default MapContainer;
