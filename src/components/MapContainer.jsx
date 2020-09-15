import React, { Component } from "react";
import { Link } from "@reach/router";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MapContainer extends Component {
  render() {
    return (
      <Map className="Map" center={[53.5546385, 9.9491622]} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[53.5546385, 9.9491622]}>
          <Popup>
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
