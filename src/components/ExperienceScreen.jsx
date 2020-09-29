import React, { Component } from "react";
import Experience from "./Experience";
import CommentsList from "./CommentsList";
import * as api from "../utils/api";
import Loader from "./Loader";
import Logo from "./Logo";
import "../styles/style.css";
import ErrorHandler from "./ErrorHandler";
import { Link } from "@reach/router";

class ExperienceScreen extends Component {
  state = {
    experience: {},
    images: [],
    tags: [],
    isLoading: true,
    err: null,
    isDeleted: false,
  };
  componentDidMount() {
    const { experience_id } = this.props;

    api.getSingleExperience(experience_id).then((res) => {
      const { experience, images, tagsForAnExperience } = res;
      if (experience)
        this.setState({
          experience,
          images,
          tags: tagsForAnExperience,
          isLoading: false,
          err: null,
        });
      else
        this.setState({
          isLoading: false,
          err: { msg: "invalid experience id" },
        });
    });
  }

  removeExperience = () => {
    this.setState({ isDeleted: true });
  };

  render() {
    const { loggedInUser } = this.props;
    if (this.state.isLoading) return <Loader />;
    if (this.state.err) return <ErrorHandler msg={this.state.err.msg} />;
    const { experience, images, tags, isDeleted } = this.state;
    const { experience_id } = experience;
    return (
      <>
        {isDeleted ? (
          <div className="error">
            <Logo />
            <h3>experience was deleted</h3>
            <p>
              To return to the home page click <Link to="/">here</Link>
            </p>
          </div>
        ) : (
          <div className="experience-comments-container">
            <Experience
              experience={experience}
              images={images}
              tags={tags}
              loggedInUser={loggedInUser}
              removeExperience={this.removeExperience}
            />
            <CommentsList
              experience_id={experience_id}
              loggedInUser={loggedInUser}
            />
          </div>
        )}
      </>
    );
  }
}

export default ExperienceScreen;
