import React, { Component } from "react";
import * as api from "../utils/api";
import FileUpload from "./FileUpload";
// import separatesHashtags from "../utils/utils";
import { navigate } from "@reach/router";

import {
  FormContainer,
  FormInput,
  FormTitle,
  FormTextarea,
  ButtonContainer,
  FormLabel,
  FormInnnerContainer,
  CloseButton,
  FormFont,
} from "../styles/AddExperienceStyles";

class AddExperience extends Component {
  state = {
    title: "",
    body: "",
    image_URL: null,
    image_desc: "temp description",
    experience_id: null,
    // tags: [],
    err: "",
    isLoading: true,
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  // re: hashtags - body is set in state, then a
  // function is needed in the backend to filter
  // out hastags iand save them on a separate key

  handleBodyChange = (e) => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    const {
      loggedInUser,
      newExperience: { location_lat, location_long },
    } = this.props;
    // const tags = separatesHashtags(body);
    // console.log(tags);
    this.state.body &&
      api
        .postExperience(title, body, loggedInUser, location_lat, location_long)
        .then((postedExperience) => {
          const { experience_id } = postedExperience;
          this.setState({ experience_id });
        })
        .then(() => {
          const { experience_id, image_URL, image_desc } = this.state;
          return api.postImage(experience_id, image_URL, image_desc);
        })
        .then((postedImage) => {
          navigate(`/experience/${postedImage.experience_id}`);
        })
        .catch((err) => {
          this.setState({ err: err.response.data.msg, isLoading: false });
        });
  };

  setImageURL = (image_URL) => {
    this.setState({ image_URL });
  };

  render() {
    const { image_URL } = this.state;
    const { toggle } = this.props;
    return (
      <FormContainer>
        {/* div */}

        <FormInnnerContainer>
          {/* div */}

          <CloseButton to="/" onClick={toggle}>
            x
          </CloseButton>
          <FormTitle>add your experience</FormTitle>

          <FormFont onSubmit={this.handleSubmit}>
            {/* form */}

            <FormLabel htmlFor="addTitle">add experience title</FormLabel>
            {/* label */}

            <FormInput
              onChange={this.handleTitleChange}
              type="text"
              value={this.state.title}
              placeholder="add your title"
              required
            ></FormInput>
            <FormLabel htmlFor="addExperience">
              describe your experience
            </FormLabel>
            <FormTextarea
              onChange={this.handleBodyChange}
              type="textarea"
              value={this.state.body}
              name="addExperience"
              placeholder="add your experience"
              rows="6"
              cols="40"
              required
            />
            <FileUpload setImageURL={this.setImageURL} image_URL={image_URL} />
            <ButtonContainer>
              {/* div */}

              <input type="submit" value="post" />
            </ButtonContainer>
          </FormFont>
        </FormInnnerContainer>
      </FormContainer>
    );
  }
}

export default AddExperience;
