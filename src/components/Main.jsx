import React from "react";
import Header from "./Header.jsx";
import MapContainer from "./MapContainer.jsx";

const Main = ({ loggedInUser }) => {
  return (
    <section>
      <Header />
      <MapContainer loggedInUser={loggedInUser} />
    </section>
  );
};

export default Main;
