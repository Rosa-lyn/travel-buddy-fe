import React, { Component } from "react";
import { Link } from "@reach/router"
import AddExperience from './AddExperience'

class Map extends Component {
  render() {
    // react leflet map here
    return (
      <>
        <section>map</section>
        <Link to="/experience">
          Read more...
        </Link>
        <Link to="/addexperience">
          <p>add experience</p>
        </Link>
      </>
    )
  }
}

export default Map;
