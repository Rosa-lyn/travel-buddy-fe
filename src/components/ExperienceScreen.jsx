import React, { Component } from "react";
import Experience from "./Experience";
import CommentsList from "./CommentsList";
import * as api from "../utils/api";
import Loader from "./Loader";
import "../styles/style.css";

class ExperienceScreen extends Component {
  state = {
    experience: {},
    images: [],
    isLoading: true,
    loggedIn: "burt1943",
  };
  componentDidMount() {
    const { experience_id } = this.props;
    api
      .getSingleExperience(experience_id)
      .then(({ experience, images }) =>
        this.setState({ experience, images, isLoading: false })
      );
  }

  render() {
    const { loggedInUser } = this.props;
    if (this.state.isLoading) return <Loader />;
    const { experience, images } = this.state;
    const { experience_id } = experience;
    return (
      <div className="experience-comments-container">
        <Experience
          experience={experience}
          images={images}
          loggedIn={this.state.loggedIn}
        />
        <CommentsList
          experience_id={experience_id}
          loggedInUser={loggedInUser}
        />
      </div>
    );
  }
}

export default ExperienceScreen;
