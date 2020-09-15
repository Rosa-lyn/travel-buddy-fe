import React, { Component } from "react";
import { Link } from "@reach/router";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MapContainer extends Component {
  state = {
    center: [0, 0],
    zoom: 2,
  };
  zoomToExperience = (event) => {
    const { lat, lng } = event.latlng;
    this.setState({ center: [lat, lng], zoom: 18 });
  };
  closePopup = () => {
    this.setState({ zoom: 14 });
  };
  render() {
    const { center, zoom } = this.state;
    return (
      <Map className="Map" center={center} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[53.5546385, 9.9491622]}
          onClick={this.zoomToExperience}
        >
          <Popup onClose={this.closePopup}>
            <h1>Incredible busker with pots and pans</h1>
            <p>John X</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <Link to="/experience">...read more</Link>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapContainer;
