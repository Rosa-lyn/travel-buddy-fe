import React, { Component } from "react";
import Experience from "./Experience";
import Comments from "./Comments";
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
      .then(({ experience, images, comments }) =>
        this.setState({ experience, images, comments, isLoading: false })
      );
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    const { experience, images } = this.state;
    return (
      <div>
        <Experience experience={experience} images={images} />
        <Comments />
      </div>
    );
  }
}

export default ExperienceScreen;
