import React, { Component } from "react";
import * as api from "../utils/api";
import FileUpload from "./FileUpload";
import separatesHashtags from "../utils/utils";
import { navigate } from "@reach/router";

import {
  FormContainer,
  FormInput,
  FormTitle,
  FormTextarea,
  Button,
  ButtonContainer,
  FormLabel,
  FormInnnerContainer,
  CloseButton,
  FormFont,
} from "../styles/AddExperienceStyles";

class AddExperience extends Component {
  state = {
    // title: "",
    // body: "",
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
    const { loggedInUser } = this.props;
    console.log(title, body);
    // const tags = separatesHashtags(body);
    // console.log(tags);
    const {
      newExperience: { location_lat, location_long },
    } = this.props;
    this.state.body &&
      api
        .postExperience(title, body, loggedInUser, location_lat, location_long)
        .then((postedExperience) => {
          console.log(postedExperience);
          navigate(`/experience/${postedExperience.experience_id}`);
        })
        .catch((err) => {
          this.setState({ err: err.response.data.msg, isLoading: false });
        });
  };

  render() {
    const {
      newExperience: { location_lat, location_long },
    } = this.props;
    return (
      <FormContainer>
        {/* div */}

        <FormInnnerContainer>
          {/* div */}

          <CloseButton to="/">x</CloseButton>
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
            <ButtonContainer>
              {/* div */}

              {/* <AddImageButton to="/addimage">add image</AddImageButton> */}
              <Button type="submit" value="post" />
            </ButtonContainer>
          </FormFont>
          <FileUpload />
        </FormInnnerContainer>
      </FormContainer>
    );
  }
}

export default AddExperience;
