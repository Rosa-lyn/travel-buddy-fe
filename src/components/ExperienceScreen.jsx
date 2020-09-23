import React, { Component } from "react";
import Experience from "./Experience";
import CommentsList from "./CommentsList";
import * as api from "../utils/api";
import Loader from "./Loader";

class ExperienceScreen extends Component {
  state = {
    experience: {},
    images: [],
    isLoading: true,
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
      <>
        <Experience experience={experience} images={images} />
        <CommentsList
          experience_id={experience_id}
          loggedInUser={loggedInUser}
        />
      </>
    );
  }
}

export default ExperienceScreen;
