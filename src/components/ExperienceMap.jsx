import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "@reach/router";

const ExperienceMap = (props) => {
  const {
    center,
    zoom,
    experiences,
    zoomToExperience,
    closePopup,
    addExperience,
  } = props;
  return (
    <Map className="Map" center={center} zoom={zoom} onclick={addExperience}>
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
          <Marker position={markerPosition} onClick={zoomToExperience}>
            <Popup onClose={closePopup}>
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
};

export default ExperienceMap;
