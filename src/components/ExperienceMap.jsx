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
    newExperience,
  } = props;
  return (
    <Map className="Map" center={center} zoom={zoom} onclick={addExperience}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {experiences.map((experience) => {
        const {
          experience_id,
          title,
          username,
          location_lat,
          location_long,
          created_at,
        } = experience;
        const markerPosition = [location_lat, location_long];
        return (
          <Marker key={experience_id} position={markerPosition}>
            <Popup onClose={closePopup}>
              <h1>{title}</h1>
              <p>
                {username} on {created_at}
              </p>
              <Link to={`/experience/${experience_id}`}>...read more</Link>
            </Popup>
          </Marker>
        );
      })}
      {/* this marker will only show when the map is clicked */}
      {newExperience !== null && (
        <Marker
          key={newExperience.experience_id}
          position={[newExperience.location_lat, newExperience.location_long]}
          onClick={zoomToExperience}
        >
          <Popup>
            <p>Do you want to add your experience here?</p>
            <Link to="/addexperience">yes</Link>
          </Popup>
        </Marker>
      )}
    </Map>
  );
};

export default ExperienceMap;
