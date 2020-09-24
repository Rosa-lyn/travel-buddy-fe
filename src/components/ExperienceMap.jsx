import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "@reach/router";
import AddExperience from "./AddExperience";
import L from "leaflet";
import userLocationURL from "../img/pin.svg";
import "../styles/style.css";

const myIcon = L.icon({
  iconUrl: userLocationURL,
  iconSize: [25, 41],
});

const showMarker = (ref) => {
  if (ref) {
    ref.leafletElement.openPopup();
  }
};

const ExperienceMap = (props) => {
  const {
    center,
    zoom,
    experiences,
    zoomToExperience,
    closePopup,
    addExperience,
    newExperience,
    addExperienceClicked,
    toggle,
    loggedInUser,
    deleteExperience,
  } = props;
  return (
    <>
      {addExperienceClicked ? (
        <AddExperience
          newExperience={newExperience}
          loggedInUser={loggedInUser}
          toggle={toggle}
        />
      ) : (
        <Map
          className="Map"
          center={center}
          zoom={zoom}
          onclick={addExperience}
        >
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
              <Marker
                key={experience_id}
                position={markerPosition}
                icon={myIcon}
                className="marker"
              >
                <Popup onClose={closePopup} className="custom-popup">
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
              position={[
                newExperience.location_lat,
                newExperience.location_long,
              ]}
              onClick={zoomToExperience}
              icon={myIcon}
              className="marker"
              ref={showMarker}
            >
              <Popup className="custom-popup" onClose={deleteExperience}>
                <p>Do you want to add your experience here?</p>
                <button onClick={toggle}>yes</button>
              </Popup>
            </Marker>
          )}
        </Map>
      )}
    </>
  );
};

export default ExperienceMap;
